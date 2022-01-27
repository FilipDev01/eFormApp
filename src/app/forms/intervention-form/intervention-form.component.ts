import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { InterventionsFormService } from '../../services/forms/interventions.form.service';
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas';



export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'dialog-overview-example-dialog.html'
})

export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-intervention-form',
  templateUrl: './intervention-form.component.html',
  styleUrls: ['./intervention-form.component.css']
})
export class InterventionFormComponent implements OnInit {
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public isEditable = true;

  public interventions: any;

  animal: string;
  name: string;
  constructor(
    private _interventionsFormService: InterventionsFormService,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
  ) {

  }

  ngOnInit(): void {
    this.interventions = this._interventionsFormService.getInterventionsAsync();

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed', result);
      this.animal = result;
    });
  }


  public saveTableAsPdf() {
    var data: any = document.getElementById('table-interventions');
    if (data) {
      const styleEl = document.createElement('style');
      styleEl.id = "temp-style";
      styleEl.innerHTML = ".table-interventions thead th, .table-interventions tbody td {font-size: 14pt !important;} #table-interventions {padding: 50px!important;}"
      data.parentNode.insertBefore(styleEl, data.nextElementSibling);

      var canvas = document.createElement('canvas');
      var options = {
        canvas: canvas,
        scale: 1,
        width: 1920,
        height: 1280,
        windowHeight: 1280,
        windowWidth: 1920,
      };

      html2canvas(data).then((canvas) => {
        const contentDataURL = canvas.toDataURL('image/png');
        var pdf = new jsPDF('l', 'mm', 'a4', true);

        var width = pdf.internal.pageSize.getWidth();
        var height = canvas.height * width / canvas.width;;

        pdf.addImage(contentDataURL, 'PNG', 1, 1, width, height);
        pdf.save('HAHA- Dashboard');

        var sEl: any = document.getElementById('temp-style');
        if (sEl) {
          sEl.remove();
        }
      });
    }
  }

}
