import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { InterventionWizardComponent } from './intervention-wizard/intervention-wizard.component';
import { InterventionsFormService } from '../../services/forms/interventions.form.service';
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-intervention-form',
  templateUrl: './intervention-form.component.html',
  styleUrls: ['./intervention-form.component.css']
})
export class InterventionFormComponent implements OnInit {

  public dateToday: Date;
  public interventions$: Promise<any>;
  public interventions: any;

  constructor(
    private _interventionsFormService: InterventionsFormService,
    public dialog: MatDialog,
  ) {
    this.dateToday = new Date();
  }

  async ngOnInit() {
    this.interventions$ = this._interventionsFormService.getInterventionsAsync();
  }

  async openDialog(date: any): Promise<any> {
    const dialogRef = this.dialog.open(InterventionWizardComponent, { panelClass: 'my-dialog', data: { form_data: await this.interventions$, date: date } });
    dialogRef.afterClosed().subscribe(async (result: any) => {
      await this._interventionsFormService.createInterventionAsync(result);
      this.interventions$ = this._interventionsFormService.getInterventionsAsync();
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
