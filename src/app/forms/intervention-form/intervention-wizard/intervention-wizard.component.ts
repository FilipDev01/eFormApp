import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-intervention-wizard',
  templateUrl: './intervention-wizard.component.html',
  styleUrls: ['./intervention-wizard.component.css']
})
export class InterventionWizardComponent implements OnInit {
  public sectionA: FormGroup;
  public sectionB: FormGroup;
  public sectionC: FormGroup;
  public sectionD: FormGroup;
  public sectionE: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public dialogRef: MatDialogRef<InterventionWizardComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.dialogData)
    this.setForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveWizard() {
    this.dialogRef.close({ data: this.getWizardFormData() });
  }

  setForm() {
    this.sectionA = this._formBuilder.group({
      a1: [0, Validators.required],
      a2: [0, Validators.required],
      a3: [0, Validators.required],
      a4: [0, Validators.required],
    });

    this.sectionB = this._formBuilder.group({
      b1: [0, Validators.required],
      b2: [0, Validators.required],
      b3: [0, Validators.required],
      b4: [0, Validators.required],
    });

    this.sectionC = this._formBuilder.group({
      c1: [0, Validators.required],
      c2: [0, Validators.required],
      c3: [0, Validators.required],
      c4: [0, Validators.required],
      c5: [0, Validators.required],
    });

    this.sectionD = this._formBuilder.group({
      d1: [0, Validators.required],
      d2: [0, Validators.required],
      d3: [0, Validators.required],
      d4: [0, Validators.required],
      d5: [0, Validators.required],
      d6: [0, Validators.required],
      d7: [0, Validators.required],
      d8: [0, Validators.required],
    });

    this.sectionE = this._formBuilder.group({
      e1: [0, Validators.required],
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
