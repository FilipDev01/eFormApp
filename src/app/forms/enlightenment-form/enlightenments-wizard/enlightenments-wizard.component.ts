import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
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
  public sectionA: FormGroup;
  public sectionB: FormGroup;
  public sectionC: FormGroup;
  public sectionD: FormGroup;

  @ViewChild('stepper') stepper: any = null;
  @ViewChild('matSelectA') matSelectA: any = null;
  @ViewChild('matSelectB') matSelectB: any = null;
  @ViewChild('matSelectC') matSelectC: any = null;
  @ViewChild('matSelectD') matSelectD: any = null;

  public selected: any;
  public enlightenmentOptions: Array<any>;
  public dropdownSettings: IDropdownSettings;

  public updated: boolean;
  private enlightenmentId: string;
  private savedEnlightenment: any;

  constructor(
    private _enlightenmentsFormService: EnlightenmentsFormService,
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public dialogRef: MatDialogRef<EnlightenmentstionWizardComponent>
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
    this.updated = false;
    this._setEnlightenmentOptions();
    this._setFormAsync(this.dialogData);
  }

  onNoClick(): void {
    this.dialogRef.close({ refresh: this.updated });
  }

  saveWizard() {
    this.dialogRef.close({ data: this.getWizardFormData() });
  }

  async onStepChange(event: any) {
    if (!!event?.save_action) {
      this.updated = true;
      const response = await this._enlightenmentsFormService.handleEnlightenmentAsync('', { data: this.getWizardFormData() }, this.dialogData.agent_id);

      if (!this.savedEnlightenment || !this.savedEnlightenment.id || this.enlightenmentId) {
        this.savedEnlightenment = response;
        this.enlightenmentId = response.id;
      } else {
        this.savedEnlightenment._version = response._version;
      }

    }
  }

  getWizardFormData() {
    const formData: any = {};
    [this.sectionA, this.sectionB, this.sectionC, this.sectionD].forEach((group: any) => {

      if (!!group.controls) {
        Object.assign(formData, group.value);
      } else {
        Object.assign(formData, group);
      }
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
      savedData = data.form_data.find((x: any) => x.date.includes(data.date));
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


    function tt(codes: any): FormArray {
      const fa: FormArray = new FormArray([]);
      if (!Array.isArray(codes)) {
        return fa;
      }

      codes.forEach((c: any) => {
        fa.push(new FormGroup({
          code: new FormControl(c.code),
          count: new FormControl(c.count),
          description: new FormControl(c.description)
        }))
      });

      return fa;
    }
    const sectionACodes = this._setEnlightenmentCodes(0, codes);
    this.sectionA = this._formBuilder.group({
      no_individuals: [(savedData?.no_individuals ?? 0), Validators.required],
      individual_codes_id: [(sectionACodes?.id ?? null), null],
      individual_codes_version: [(sectionACodes?.version ?? null), null],
      individual_codes: tt(sectionACodes?.codes)
    });

    const sectionBCodes = this._setEnlightenmentCodes(1, codes);
    this.sectionB = this._formBuilder.group({
      no_families: [(savedData?.no_families ?? 0)],
      no_people_in_families: [(savedData?.no_people_in_families ?? 0)],
      family_codes_id: [(sectionBCodes?.id ?? null), null],
      family_codes_version: [(sectionBCodes?.version ?? null), null],
      family_codes: tt(sectionBCodes?.codes)
    });

    const sectionCCodes = this._setEnlightenmentCodes(2, codes);
    this.sectionC = this._formBuilder.group({
      school_name: [(savedData?.school_name ?? '')],
      school_year: [(savedData?.school_year ?? '')],
      no_students: [(savedData?.no_students ?? 0), null],
      school_codes_id: [(sectionCCodes?.id ?? null), null],
      school_codes_version: [(sectionCCodes?.version ?? null), null],
      school_codes: tt(sectionCCodes?.codes)
    });

    const sectionDCodes = this._setEnlightenmentCodes(3, codes);
    this.sectionD = this._formBuilder.group({
      community_center_name: [(savedData?.community_center_name ?? '')],
      no_community_center_members: [(savedData?.no_community_center_members ?? 0)],
      community_center_codes_id: [(sectionDCodes?.id ?? null), null],
      community_center_codes_version: [(sectionDCodes?.version ?? null), null],
      community_center_codes: tt(sectionDCodes?.codes)
    });
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
      'Riziká užívania liekov v kombinácii s návykovými látkami',
      'Poučenie o pitnom režime',
      'Tehotné (prevencia ochorení, príprava na pôrod, výbava pre novorodenca, správna životospráva v tehotenstve, vývoj plodu, príprava na nemocničné prostredie, príprava tašky do pôrodnice a ďalšie)',
      'Dojčenie, prípadne dohľad nad správnym používaním náhrady stravy pre novorodenca',
      'Ošatenie',
      'Preventívne prehliadky',
      'Povinné očkovanie ',
      'Starostlivosť o deti a rodinu',
      'Prevencia a liečba pedikulózy',

      'Svrab, prevencia a liečba',
      'TBC tuberkulóza, prevencia a liečba',
      'Prevencia pre žltačkou A a B',
      'Ostatné infekčné ochorenia - prevencia, očkovanie',
      'Reprodukčné zdravie a plánované rodičovstvo',
      'Sexuálne zdravie a ochrana pred pohlavnými chorobami',
      'Poskytnutie prvej pomoci a dôležitých telefónnych číslach a dodržaní zásad telefonovania na tiesňové telefónne linky',
      'Osobná hygiena',
      'Komunálna hygiena a ochrana zdravia',
      'Dentálna hygiena',

      'Hygiena domáceho prostredia',
      'Infekčné ochorenie COVID-19 ',
      'Hygiena stolovania',
      'Správna životospráva',
      'Hypertenzia, hypotenzia - prevencia, dodržiavanie liečby, užívanie liekov ',
      'Nikotinizmus (fajčenie)',
      'Alkoholizmus ',
      'Osveta o užívaní návykových látok - drogy',
      'Nelátkové závislosti - gamblerstvo ',
      'Zvýšenie povedomia o právach osôb so zdravotným postihnutím',
    ]

    this.enlightenmentOptions = new Array<any>();
    options.forEach((option: string, i: number) => {
      const index = i + 1;
      this.enlightenmentOptions.push({ code: `F${index}`, description: option, value: index });
    });
  }
}
