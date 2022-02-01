import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  public sectionE: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public dialogRef: MatDialogRef<EnlightenmentstionWizardComponent>
  ) { }

  ngOnInit(): void {
    this.setForm(this.dialogData);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveWizard() {
    this.dialogRef.close({ data: this.getWizardFormData() });
  }

  setForm(data: any) {
    let savedData = null;
    if (!!data.date && !!data.form_data && Array.isArray(data.form_data)) {
      var dateISOstr = data.date.toISOString();
      savedData = data.form_data.find((x: any) => x.date === dateISOstr);
    }

    this.sectionA = this._formBuilder.group({
      a1: [(!!savedData ? savedData.a1 : 0), Validators.required],
      a2: [(!!savedData ? savedData.a2 : ''), Validators.required],
    });

    this.sectionB = this._formBuilder.group({
      b1: [(!!savedData ? savedData.b1 : 0), Validators.required],
      b2: [(!!savedData ? savedData.b2 : 0), Validators.required],
      b3: [(!!savedData ? savedData.b3 : ''), Validators.required],
    });

    this.sectionC = this._formBuilder.group({
      c1: [(!!savedData ? savedData.c1 : ''), Validators.required],
      c2: [(!!savedData ? savedData.c2 : 0), Validators.required],
      c3: [(!!savedData ? savedData.c3 : 0), Validators.required],
      c4: [(!!savedData ? savedData.c4 : ''), Validators.required],
    });

    this.sectionD = this._formBuilder.group({
      d1: [(!!savedData ? savedData.d1 : ''), Validators.required],
      d2: [(!!savedData ? savedData.d2 : 0), Validators.required],
      d3: [(!!savedData ? savedData.d3 : ''), Validators.required],
    });
  }

  getWizardFormData() {
    const formData = {};
    [this.sectionA, this.sectionB, this.sectionC, this.sectionD, this.sectionE].forEach((group: FormGroup) => {
      Object.assign(formData, group.getRawValue());
    });

    Object.assign(formData, this.dialogData);

    return formData;
  }
}
