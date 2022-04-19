import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-covid-monitoring-wizard',
  templateUrl: './covid-wizard.component.html',
  styleUrls: ['./covid-wizard.component.css']
})
export class MonitoringCovidWizardComponent implements OnInit {
  public sectionA: FormGroup;
  public sectionB: FormGroup;
  public sectionC: FormGroup;
  public sectionD: FormGroup;
  public sectionE: FormGroup;
  public sectionF: FormGroup;
  public sectionG: FormGroup;
  public sectionH: FormGroup;

  @ViewChild('matSelectA') matSelectA: any = null;
  @ViewChild('matSelectB') matSelectB: any = null;
  @ViewChild('matSelectC') matSelectC: any = null;
  @ViewChild('matSelectD') matSelectD: any = null;
  @ViewChild('matSelectE') matSelectE: any = null;
  @ViewChild('matSelectF') matSelectF: any = null;
  @ViewChild('matSelectG') matSelectG: any = null;

  private covidMonitoringId: string;
  private savedCovidMonitoring: any;
  constructor(
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public dialogRef: MatDialogRef<MonitoringCovidWizardComponent>
  ) { }

  ngOnInit(): void {
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
    [this.sectionA, this.sectionB, this.sectionC, this.sectionD, this.sectionE, this.sectionF, this.sectionG, this.sectionH].forEach((group: FormGroup) => {
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

    this._calculateHiddenTotals(formData);

    formData.date = this.dialogData.date;
    formData.id = !!this.covidMonitoringId ? this.covidMonitoringId : null;
    formData.version = !!this.savedCovidMonitoring && this.savedCovidMonitoring._version ? this.savedCovidMonitoring._version : null;
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
    } else if (type === 'e') {
      this.matSelectD.close();
    } else if (type === 'f') {
      this.matSelectD.close();
    } else if (type === 'g') {
      this.matSelectD.close();
    } else if (type === 'h') {
      this.matSelectD.close();
    }
  }

  private _setForm(data: any) {
    let savedData = null;
    if (!!data.date && !!data.form_data && Array.isArray(data.form_data)) {
      var dateISOstr = this._toLocalIsoString(data.date, true);
      savedData = data.form_data.find((x: any) => x.date === dateISOstr);
    }

    if (!!savedData) {
      this.covidMonitoringId = savedData.id;
      this.savedCovidMonitoring = savedData;
    }

    this.sectionA = this._formBuilder.group({
      a1: [(!!savedData ? savedData.a1 : 0)],
      a2: [(!!savedData ? savedData.a2 : 0)],
      a3: [(!!savedData ? savedData.a3 : 0)],
      a4: [(!!savedData ? savedData.a4 : 0)],
      a5: [(!!savedData ? savedData.a5 : 0)],
    });

    this.sectionB = this._formBuilder.group({
      b1: [(!!savedData ? savedData.a1 : 0)],
      b2: [(!!savedData ? savedData.b2 : 0)],
      b3: [(!!savedData ? savedData.b3 : 0)],
      b4: [(!!savedData ? savedData.b4 : 0)],
      b5: [(!!savedData ? savedData.b5 : 0)],
    });

    this.sectionC = this._formBuilder.group({
      c1: [(!!savedData ? savedData.c1 : 0)],
    });

    this.sectionD = this._formBuilder.group({
      d1: [(!!savedData ? savedData.d1 : 0)],
      d2: [(!!savedData ? savedData.c2 : 0)],
      d3: [(!!savedData ? savedData.d3 : 0)],
      d4: [(!!savedData ? savedData.d4 : 0)],
    });

    this.sectionE = this._formBuilder.group({
      e1: [(!!savedData ? savedData.e1 : 0)],
      e2: [(!!savedData ? savedData.e2 : 0)],
      e3: [(!!savedData ? savedData.e3 : 0)],
      e4: [(!!savedData ? savedData.e4 : 0)],
      e5: [(!!savedData ? savedData.e5 : 0)],
      e6: [(!!savedData ? savedData.e6 : 0)],
      e7: [(!!savedData ? savedData.e7 : 0)],
    });

    this.sectionF = this._formBuilder.group({
      f1: [(!!savedData ? savedData.f1 : 0)],
      f2: [(!!savedData ? savedData.f2 : 0)],
      f3: [(!!savedData ? savedData.f3 : 0)],
      f4: [(!!savedData ? savedData.f4 : 0)],
      f5: [(!!savedData ? savedData.f5 : 0)],
      f6: [(!!savedData ? savedData.f6 : 0)],
      f7: [(!!savedData ? savedData.f7 : 0)],
      f8: [(!!savedData ? savedData.f8 : 0)],
      f9: [(!!savedData ? savedData.f9 : 0)],
      f10: [(!!savedData ? savedData.f10 : 0)],
    });

    this.sectionG = this._formBuilder.group({
      g1: [(!!savedData ? savedData.g1 : "")]
    });

    this.sectionH = this._formBuilder.group({
      h1: [(!!savedData ? savedData.h1 : 0)],
      h2: [(!!savedData ? savedData.h2 : 0)],
      h3: [(!!savedData ? savedData.h3 : 0)],
      h4: [(!!savedData ? savedData.h4 : 0)],
      h5: [(!!savedData ? savedData.h5 : 0)],
      h6: [(!!savedData ? savedData.h6 : 0)],
      h7: [(!!savedData ? savedData.h7 : 0)],
      h8: [(!!savedData ? savedData.h8 : 0)],
      h9: [(!!savedData ? savedData.h9 : 0)],
      h10: [(!!savedData ? savedData.h10 : 0)],
    });
  }

  private _calculateHiddenTotals(formData: any) {
    formData.a2 = formData.a3 + formData.a4 + formData.a5; // PCR
    formData.b2 = formData.b3 + formData.b4 + formData.b5; // ANTIGEN
    formData.d1 = formData.d2 + formData.b3 + formData.b4; // HOSPITAL
    formData.e1 = formData.e2 + formData.e3 + formData.e4 + formData.e5 + formData.e6 + formData.e7; // FATALITIES
    formData.f1 = formData.f2 + formData.f3 + formData.f4 + formData.f5 + formData.f6 + formData.f7 + formData.f8 + formData.f9 + formData.f10; // VACTINATIONS
    formData.h1 = formData.h2 + formData.h3 + formData.h4 + formData.h5 + formData.h6 + formData.h7 + formData.h8 + formData.h9 + formData.h10; // REG VACTIONTIONS
  }

  private _toLocalIsoString(date: Date, includeSeconds: boolean) {
    function pad(n: any) { return n < 10 ? '0' + n : n }
    var localIsoString = date.getFullYear() + '-'
      + pad(date.getMonth() + 1) + '-'
      + pad(date.getDate()) + 'T'
      + pad(date.getHours()) + ':'
      + pad(date.getMinutes()) + ':'
      + pad(date.getSeconds());
    if (date.getTimezoneOffset() == 0) localIsoString += 'Z';
    return localIsoString;
  };
}
