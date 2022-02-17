import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { EnlightenmentsFormService } from '../../../services/forms/enlightenment.form.service';

@Component({
  selector: 'app-enlightenments-wizard',
  templateUrl: './enlightenments-wizard.component.html',
  styleUrls: ['./enlightenments-wizard.component.css']
})
export class EnlightenmentstionWizardComponent implements OnInit {
  public sectionA: any;
  public sectionB: any;
  public sectionC: any;
  public sectionD: any;

  @ViewChild('matSelectA') matSelectA: any = null;
  @ViewChild('matSelectB') matSelectB: any = null;
  @ViewChild('matSelectC') matSelectC: any = null;
  @ViewChild('matSelectD') matSelectD: any = null;

  public selected: any;
  public enlightenmentOptions: Array<any>;
  public dropdownSettings: IDropdownSettings;

  private enlightenmentId: string;
  private savedEnlightenment: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public dialogRef: MatDialogRef<EnlightenmentstionWizardComponent>,
    private _enlightenmentsFormService: EnlightenmentsFormService
  ) {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'code',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  ngOnInit(): void {
    this._setEnlightenmentOptions();
    this._setFormAsync(this.dialogData);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveWizard() {
    this.dialogRef.close({ data: this.getWizardFormData() });
  }

  getWizardFormData() {
    const formData: any = {};
    [this.sectionA, this.sectionB, this.sectionC, this.sectionD].forEach((group: any) => {
      Object.assign(formData, group);
    });

    formData.date = this.dialogData.date;
    formData.id = !!this.enlightenmentId ? this.enlightenmentId : null;
    formData.version = !!this.savedEnlightenment && this.savedEnlightenment._version ? this.savedEnlightenment._version : null;

    return formData;
  }

  handleSelectionAction(type: string) {
    if (type === 'a') {
      this.matSelectA.close();
    } else if (type === 'b') {
      this.matSelectB.close();
    } else if (type === 'c') {
      this.matSelectC.close();
    } else if (type === 'd') {
      this.matSelectD.close();
    }
  }

  private async _setFormAsync(data: any) {
    let savedData: any = null;
    if (!!data.date && !!data.form_data && Array.isArray(data.form_data)) {
      var dateISOstr = data.date.toISOString();
      savedData = data.form_data.find((x: any) => x.date === dateISOstr);
    }

    // Check if enlightenments codes exits
    // -------------------------------------------------------------------------------------------------------------------
    let codes;
    if (!!savedData && !!savedData.id) {
      this.enlightenmentId = savedData.id;

      savedData = await this._enlightenmentsFormService.getEnlightenmentCodeAsync(this.enlightenmentId);
      codes = savedData.enlightenmentCodes?.items ?? [];

      this.savedEnlightenment = savedData;
    }

    const sectionACodes = this._setEnlightenmentCodes(0, codes);
    this.sectionA = {
      no_individuals: savedData?.no_individuals ?? 0,
      individual_codes_id: sectionACodes?.id ?? null,
      individual_codes_version: sectionACodes?.version ?? null,
      individual_codes: sectionACodes?.codes ?? null
    };

    const sectionBCodes = this._setEnlightenmentCodes(1, codes);
    this.sectionB = {
      no_families: savedData?.no_families ?? 0, no_people_in_families: savedData?.no_people_in_families ?? 0,
      family_codes_id: sectionBCodes?.id ?? null,
      family_codes_version: sectionBCodes?.version ?? null,
      family_codes: sectionBCodes?.codes ?? null
    };

    const sectionCCodes = this._setEnlightenmentCodes(2, codes);
    this.sectionC = {
      school_name: savedData?.school_name ?? '',
      no_students: savedData?.no_students ?? 0,
      school_codes_id: sectionCCodes?.id ?? null,
      school_codes_version: sectionCCodes?.version ?? null,
      school_codes: sectionCCodes?.codes ?? null
    };

    const sectionDCodes = this._setEnlightenmentCodes(3, codes);
    this.sectionD = {
      community_center_name: savedData?.community_center_name ?? '',
      no_community_center_members: savedData?.no_community_center_members ?? 0,
      community_center_codes_id: sectionDCodes?.id ?? null,
      community_center_codes_version: sectionDCodes?.version ?? null,
      community_center_codes: sectionDCodes?.codes ?? null
    };
  }

  public addCode(section: any, type: string) {
    section[type] = !section[type] ? new Array<any>() : section[type];
    section[type].push({ code: '', count: null, description: '' });
  }

  public removeCode(sectionCodes: any, item: any) {
    const ind = sectionCodes.indexOf(item);
    if (ind > -1) {
      sectionCodes.splice(ind, 1);
    }
  }

  private _setEnlightenmentCodes(type: number, codes: Array<any>) {
    if (!codes) {
      return null;
    }

    const sectionCodes = codes.find((x: any) => x.type === type);
    if (!sectionCodes) {
      return null;
    }

    const sectionWizardCodeObject = new Array<any>();
    const sectionWizardCodeKeys = Object.keys(sectionCodes);

    sectionWizardCodeKeys.forEach((key: string) => {
      if (key.includes('f') && sectionCodes[key]) {
        const code = key.toUpperCase();
        let description = this.enlightenmentOptions.find(x => x.code === code);
        description = description?.description ?? '';

        sectionWizardCodeObject.push({ code: code, description: code, count: sectionCodes[key] });
      }
    })

    return { id: sectionCodes.id, version: sectionCodes._version, codes: sectionWizardCodeObject.length > 0 ? sectionWizardCodeObject : null };
  }

  private _setEnlightenmentOptions() {
    const options = [
      'Poučenie o užívaní lieku',
      'Osveta o rizikách užívania liekov v kombinácii s návykovými látkami',
      'Poučenie o pitnom režime',
      'Osveta pre tehotné (prevencia ochorení, príprava na pôrod, výbava pre novorodenca, správna životospráva v tehotenstve, vývoj plodu, príprava na nemocničné prostredie, príprava tašky do pôrodnice a ďalšie)',
      'Osveta o dojčení, prípadne dohľad nad správnym používaním náhrady stravy pre novorodenca',
      'Osveta o ošatení',
      'Osveta o preventívnych prehliadkach',
      'Osveta o povinnom očkovaní ',
      'Osveta o starostlivosti o deti a rodinu',
      'Osveta - prevencia a liečba pedikulózy',

      'Osveta - svrab, prevencia a liečba',
      'Osveta - TBC tuberkulóza, prevencia a liečba',
      'Osveta - prevencia pre žltačkou A a B',
      'Osveta pred ostatnými infekčnými ochoreniami - prevencia, očkovanie',
      'Osveta - reprodukčné zdravie a plánované rodičovstvo',
      'Osveta - sexuálne zdravie a ochrana pred pohlavnými chorobami',
      'Osveta o poskytnutí prvej pomoci a dôležitých telefónnych číslach a dodržaní zásad telefonovania na tiesňové telefónne linky',
      'Osveta - osobná hygiena',
      'Osveta - komunálna hygiena a ochrana zdravia',
      'Osveta - dentálna hygiena',

      'Osveta - hygiena domáceho prostredia',
      'Osveta - o infekčnom ochorení COVID-19 ',
      'Osveta - hygiena stolovania',
      'Osveta - správna životospráva',
      'Osveta - hypertenzia, hypotenzia - prevencia, dodržiavanie liečby, užívanie liekov ',
      'Osveta - nikotinizmus (fajčenie)',
      'Osveta - alkoholizmus ',
      'Osveta - osveta o užívaní návykových látok - drogy',
      'Osveta - nelátkové závislosti - gamblerstvo ',
      'Osveta - zvýšenie povedomia o právach osôb so zdravotným postihnutím',
    ]

    this.enlightenmentOptions = new Array<any>();
    options.forEach((option: string, i: number) => {
      const index = i + 1;
      this.enlightenmentOptions.push({ code: `F${index}`, description: option, value: index });
    });
  }
}
