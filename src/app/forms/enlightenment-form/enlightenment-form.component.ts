import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import jsPDF from 'jspdf'
import html2canvas from 'html2canvas';

import { GlobalConstants } from '../../common/global-constants';
import { Enlightenments } from '../../services/graphql/graphql.service';
import { EnlightenmentstionWizardComponent } from './enlightenments-wizard/enlightenments-wizard.component';
import { EnlightenmentsFormService } from '../../services/forms/enlightenment.form.service';

@Component({
  selector: 'app-enlightenment-form',
  templateUrl: './enlightenment-form.component.html',
  styleUrls: ['./enlightenment-form.component.css']
})
export class EnlightenmentFormComponent implements OnInit {
  public agentId: string | null;
  public agentName: string;
  public agentIsAdmin: boolean;

  public dateToday: Date;
  public processing: boolean;

  public enlightenments$: Promise<any>;
  public enlightenments: any;

  public pdfData: Array<any>;


  constructor(
    public dialog: MatDialog,
    private _route: ActivatedRoute,
    private _router: Router,
    private _enlightenmentsFormService: EnlightenmentsFormService
  ) {
    this.agentId = this._route.snapshot.paramMap.get('agentId');
    this.dateToday = new Date();
  }

  async ngOnInit() {
    this.agentIsAdmin = !!!!GlobalConstants.currentUserGroups && GlobalConstants.currentUserGroups.includes('admin');
    this.enlightenments$ = this._enlightenmentsFormService.getEnlightenmentsAsync(this.agentId);
    if (this.agentIsAdmin) {
      this._setAgentDetails();
      this._generatePdfData();
    }
  }

  goBackToAgent() {
    this._router.navigate([`/agent/${this.agentId}`])
  }

  async openDialog(date: any): Promise<any> {
    const dialogRef = this.dialog.open(EnlightenmentstionWizardComponent, { panelClass: 'my-dialog-enlightenments', data: { form_data: await this.enlightenments$, date: date } });
    dialogRef.afterClosed()
      .subscribe(async (result: any) => {
        const response = await this._enlightenmentsFormService.createEnlightenmentAsync(result, this.agentId);
        if (!!response) {
          this.enlightenments$ = this._enlightenmentsFormService.getEnlightenmentsAsync(this.agentId);
        }
      });
  }

  public async generatePdfFileAsync() {
    try {
      this.processing = true
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

        pdf.save(`apz_osveta.pdf`);
      }

      this.processing = false;
    } catch (err: any) {
      this.processing = false;
    }
  }

  private async _generatePdfData() {
    const enlightenments = await this.enlightenments$;

    const rows: Array<Enlightenments> = new Array<Enlightenments>();
    const daysInMonth = this._getDaysInCurrentMonth();
    daysInMonth.forEach((date: any) => {
      const temp: Enlightenments = {
        __typename: "Enlightenments",
        id: 'dummy',
        createdAt: 'dummy',
        updatedAt: 'dummy'
      };

      const int = enlightenments.find((x: any) => x.date === date);

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

    console.log(this.pdfData);
  }


  private async _generatePdfCanvas(pageNo: number) {
    const data: any = document.getElementById(`pdf_page_${pageNo}`);
    if (!data) {
      return null;
    }

    const styleEl = document.createElement('style');
    styleEl.id = "temp-style";
    styleEl.innerHTML = ".table-interventions thead th, .table-interventions tbody td {font-size: 14pt !important;} #table-interventions {padding: 50px!important;}"
    data.parentNode.insertBefore(styleEl, data.nextElementSibling);

    const canvas = document.createElement('canvas');
    const can = await html2canvas(data);

    const contentDataURL = can.toDataURL('image/png');
    const pdf = new jsPDF('l', 'mm', 'a4', true);

    const width = pdf.internal.pageSize.getWidth();
    const height = canvas.height * width / canvas.width;;

    return { data_url: contentDataURL, img_type: 'PNG', x: 1, y: 1, width: width, height: height }
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
