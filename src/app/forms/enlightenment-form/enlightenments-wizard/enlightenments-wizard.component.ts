import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

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

  @ViewChild('matSelectA') matSelectA: any = null;
  @ViewChild('matSelectB') matSelectB: any = null;
  @ViewChild('matSelectC') matSelectC: any = null;
  @ViewChild('matSelectD') matSelectD: any = null;

  public enlightenmentOptions: Array<any>;
  public selected: any;
  public dropdownSettings: IDropdownSettings;

  constructor(
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
    this._setEnlightenmentOptions();
    this._setForm(this.dialogData);

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveWizard() {
    this.dialogRef.close({ data: this.getWizardFormData() });
  }

  getWizardFormData() {
    const formData: any = {};
    [this.sectionA, this.sectionB, this.sectionC, this.sectionD].forEach((group: FormGroup) => {
      Object.assign(formData, group.getRawValue());
    });

    if (!!formData) {
      const keys = Object.keys(formData);
      keys.forEach((key: string) => {
        if (Array.isArray(formData[key])) {
          formData[key] = formData[key].join(',');
        }
      });
    }

    formData.date = this.dialogData.date;
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

  private _setForm(data: any) {
    let savedData = null;
    if (!!data.date && !!data.form_data && Array.isArray(data.form_data)) {
      var dateISOstr = data.date.toISOString();
      savedData = data.form_data.find((x: any) => x.date === dateISOstr);
    }

    this.sectionA = this._formBuilder.group({
      a1: [(!!savedData ? savedData.a1 : 0), Validators.required],
      a2: [((!!savedData && !!savedData.a2) ? savedData.a2.split(',') : ''), Validators.required],
    });

    this.sectionB = this._formBuilder.group({
      b1: [(!!savedData ? savedData.b1 : 0), Validators.required],
      b2: [(!!savedData ? savedData.b2 : 0), Validators.required],
      b3: [((!!savedData && !!savedData.b3) ? savedData.b3.split(',') : ''), Validators.required],
    });

    this.sectionC = this._formBuilder.group({
      c1: [(!!savedData ? savedData.c1 : ''), Validators.required],
      c2: [(!!savedData ? savedData.c2 : 0), Validators.required],
      c3: [(!!savedData ? savedData.c3 : 0), Validators.required],
      c4: [((!!savedData && !!savedData.c4) ? savedData.c4.split(',') : ''), Validators.required],
    });

    this.sectionD = this._formBuilder.group({
      d1: [(!!savedData ? savedData.d1 : ''), Validators.required],
      d2: [(!!savedData ? savedData.d2 : 0), Validators.required],
      d3: [((!!savedData && savedData.d3) ? savedData.d3.split(',') : ''), Validators.required],
    });
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
