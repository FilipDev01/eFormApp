import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import jsPDF from 'jspdf'
import html2canvas from 'html2canvas';

import { InterventionWizardComponent } from './intervention-wizard/intervention-wizard.component';
import { InterventionsFormService } from '../../services/forms/interventions.form.service';
import { Interventions } from 'src/app/services/graphql/Interventions.service';
import { GlobalConstants } from 'src/app/common/global-constants';

@Component({
  selector: 'app-intervention-form',
  templateUrl: './intervention-form.component.html',
  styleUrls: ['./intervention-form.component.css']
})
export class InterventionFormComponent implements OnInit {
  public agentId: string | null;
  public agentName: string;
  public isAdmin: boolean;

  public dateToday: Date;

  public interventions$: Promise<any>;
  public interventions: any;

  public pdfData: Array<any>;
  constructor(
    public dialog: MatDialog,
    private _interventionsFormService: InterventionsFormService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.agentId = this._route.snapshot.paramMap.get('agentId');
    this.dateToday = new Date();
  }

  async ngOnInit() {
    this.interventions$ = this._interventionsFormService.getInterventionsAsync(this.agentId);
    this.isAdmin = GlobalConstants.currentUserGroups.includes('admin');
    if (this.isAdmin) {
      this._setAgentDetails();
      this.generatePdfData();
    }
  }

  goBackToAgent() {
    this._router.navigate([`/agent/${this.agentId}`])
  }

  async openDialog(date: any): Promise<any> {
    const dialogRef = this.dialog.open(InterventionWizardComponent, { panelClass: 'my-dialog', data: { form_data: await this.interventions$, date: date } });
    dialogRef.afterClosed().subscribe(async (result: any) => {
      await this._interventionsFormService.createInterventionAsync(result, this.agentId);
      this.interventions$ = this._interventionsFormService.getInterventionsAsync(this.agentId);
    });
  }

  async generatePdfData() {
    const interventions = await this.interventions$;

    const rows: Array<Interventions> = new Array<Interventions>();
    const daysInMonth = this._getDaysInCurrentMonth();
    daysInMonth.forEach((date: any) => {
      const temp: Interventions = {
        __typename: "Interventions",
        id: 'dummy',
        createdAt: 'dummy',
        updatedAt: 'dummy'
      };

      const int = interventions.find((x: any) => x.date === date);

      if (!!int) {
        rows.push(int);
      } else {
        rows.push(temp)
      }
    });

    rows.forEach((row: any, i: number) => {
      row.day_int = (i + 1);
    });

    this.pdfData = new Array<any>();
    this.pdfData.push(rows.slice(0, 16));
    this.pdfData.push(rows.slice(16));
  }

  public async generatePdfFileAsync() {
    const canvasesAsync = Array<Promise<any>>();
    this.pdfData.forEach(async (element: any, ind: number) => {
      canvasesAsync.push(this._generatePdfCanvas(ind));
    });

    const canvases = await Promise.all(canvasesAsync);
    if (!!canvases && canvases.length > 0 && !!canvases[0]) {
      var pdf = new jsPDF('l', 'mm', 'a4', true);
      canvases.forEach((canvas: any, i: number) => {

        if (i > 0) {
          pdf.addPage();
        }
        pdf.setPage(i + 1);
        pdf.addImage(
          canvas.data_url,
          canvas.img_type,
          canvas.x,
          canvas.y,
          canvas.width,
          canvas.height);
      });

      pdf.save(`apz_intervencie.pdf`);
    }
  }


  private async _generatePdfCanvas(pageNo: number) {
    var data: any = document.getElementById(`pdf_page_${pageNo}`);
    if (data) {
      const styleEl = document.createElement('style');
      styleEl.id = "temp-style";
      styleEl.innerHTML = ".table-interventions thead th, .table-interventions tbody td {font-size: 14pt !important;} #table-interventions {padding: 50px!important;}"
      data.parentNode.insertBefore(styleEl, data.nextElementSibling);

      var canvas = document.createElement('canvas');
      const can = await html2canvas(data);

      const contentDataURL = can.toDataURL('image/png');
      var pdf = new jsPDF('l', 'mm', 'a4', true);

      var width = pdf.internal.pageSize.getWidth();
      var height = canvas.height * width / canvas.width;;

      return { data_url: contentDataURL, img_type: 'PNG', x: 1, y: 1, width: width, height: height }

      html2canvas(data).then((canvas) => {
        const contentDataURL = canvas.toDataURL('image/png');
        var pdf = new jsPDF('l', 'mm', 'a4', true);

        var width = pdf.internal.pageSize.getWidth();
        var height = canvas.height * width / canvas.width;;

        pdf.addImage(contentDataURL, 'PNG', 1, 1, width, height);
        pdf.save(`HAHA- Dashboard-${pageNo}`);

        var sEl: any = document.getElementById('temp-style');
        if (sEl) {
          sEl.remove();
        }
      });
    }

    return null;
  }

  private _getDaysInCurrentMonth() {
    const currentDate = new Date();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date).toISOString());
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  private _setAgentDetails() {
    const agent = GlobalConstants.selectedAgent;;
    const attributes = !!agent.Attributes ? agent.Attributes : agent.attributes;
    if (Array.isArray(attributes)) {
      attributes.forEach(element => {
        if (element.Name === 'email') {
          agent.email = element.Value;
        } else if (element.Name === 'given_name') {
          agent.name = element.Value;
        }
      });
    } else if (!!attributes && typeof attributes === 'object') {
      agent.email = attributes?.email;
      agent.name = attributes?.given_name;
    }

    this.agentName = agent.name;
  }
}
