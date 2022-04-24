import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InterventionsFormService } from '../../../services/forms/interventions.form.service';

@Component({
  selector: 'app-intervention-wizard',
  templateUrl: './intervention-wizard.component.html',
  styleUrls: ['./intervention-wizard.component.css']
})
export class InterventionWizardComponent implements OnInit {
  @ViewChild('stepper') stepper: any = null;

  public sectionA: FormGroup;
  public sectionB: FormGroup;
  public sectionC: FormGroup;
  public sectionD: FormGroup;
  public sectionE: FormGroup;

  public updated: boolean;
  private interventionId: string;
  private savedIntervention: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _interventionsFormService: InterventionsFormService,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public dialogRef: MatDialogRef<InterventionWizardComponent>
  ) { }

  ngOnInit(): void {
    this.updated = false;
    this.setForm(this.dialogData);
  }

  onNoClick(): void {
    this.dialogRef.close({ refresh: this.updated });
  }

  saveWizard() {
    this.dialogRef.close({ data: this.getWizardFormData() });
  }

  async onStepChange() {
    try {
      this.updated = true;
      const response = await this._interventionsFormService.handleInterventionAsync({ data: this.getWizardFormData() }, this.dialogData.agent_id);

      if (!this.savedIntervention || this.savedIntervention.id || this.savedIntervention) {
        this.savedIntervention = response;
        this.interventionId = response.id;
      } else {
        this.savedIntervention._version = response._version;
      }

      this.stepper.next();
    } catch (err) {
      console.error("Err", err);
    }
  }

  setForm(data: any) {
    let savedData = null;
    if (!!data.date && !!data.form_data && Array.isArray(data.form_data)) {
      savedData = data.form_data.find((x: any) => x.date.includes(data.date));
    }

    if (!!savedData && !!savedData.id) {
      this.interventionId = savedData.id;
      this.savedIntervention = savedData;
    }

    this.sectionA = this._formBuilder.group({
      a1: [(!!savedData ? savedData.a1 : 0), Validators.required],
      a2: [(!!savedData ? savedData.a2 : 0), Validators.required],
      a3: [(!!savedData ? savedData.a3 : 0), Validators.required],
      a4: [(!!savedData ? savedData.a4 : 0), Validators.required],
    });

    this.sectionB = this._formBuilder.group({
      b1: [(!!savedData ? savedData.b1 : 0), Validators.required],
      b2: [(!!savedData ? savedData.b2 : 0), Validators.required],
      b3: [(!!savedData ? savedData.b3 : 0), Validators.required],
      b4: [(!!savedData ? savedData.b4 : 0), Validators.required],
    });

    this.sectionC = this._formBuilder.group({
      c1: [(!!savedData ? savedData.c1 : 0), Validators.required],
      c2: [(!!savedData ? savedData.c2 : 0), Validators.required],
      c3: [(!!savedData ? savedData.c3 : 0), Validators.required],
      c4: [(!!savedData ? savedData.c4 : 0), Validators.required],
      c5: [(!!savedData ? savedData.c5 : 0), Validators.required],
    });

    this.sectionD = this._formBuilder.group({
      d1: [(!!savedData ? savedData.d1 : 0), Validators.required],
      d2: [(!!savedData ? savedData.d2 : 0), Validators.required],
      d3: [(!!savedData ? savedData.d3 : 0), Validators.required],
      d4: [(!!savedData ? savedData.d4 : 0), Validators.required],
      d5: [(!!savedData ? savedData.d5 : 0), Validators.required],
      d6: [(!!savedData ? savedData.d6 : 0), Validators.required],
      d7: [(!!savedData ? savedData.d7 : 0), Validators.required],
      d8: [(!!savedData ? savedData.d8 : 0), Validators.required],
    });

    this.sectionE = this._formBuilder.group({
      e1: [(!!savedData ? savedData.e1 : 0), Validators.required],
    });
  }

  getWizardFormData() {
    const formData: any = {};
    [this.sectionA, this.sectionB, this.sectionC, this.sectionD, this.sectionE].forEach((group: FormGroup) => {
      Object.assign(formData, group.getRawValue());
    });

    formData.date = this.dialogData.date;
    formData.id = !!this.interventionId ? this.interventionId : null;
    formData.version = !!this.savedIntervention && this.savedIntervention._version ? this.savedIntervention._version : null;

    return formData;
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
