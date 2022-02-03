import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormCommonService } from '../../services/forms/common.service';
import { GlobalConstants } from '../../common/global-constants';

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

  public dataProcessing: boolean;
  public processing: boolean;

  public interventions: any;

  public pdfData: Array<any> | null;
  public pdfTotals: any;

  constructor(
    private _formService: FormCommonService,
    private _route: ActivatedRoute,
  ) {
    this.agentId = this._route.snapshot.paramMap.get('agentId');
    this.dateToday = new Date();
  }

  async ngOnInit() {
    this.interventions = await this._formService.getFormData('interventions', this.agentId);

    this.isAdmin = !!GlobalConstants.currentUserGroups && GlobalConstants.currentUserGroups.includes('admin');
    if (this.isAdmin) {
      this.agentName = this._formService.setAgentDetails();
      this.pdfData = this._formService.generatePdfData('interventions', this.interventions);
      this.pdfTotals = this._formService.generatePdfTotals('interventions', this.interventions);
    }
  }

  public goBackToAgent() {
    this._formService.goBackToAgent(this.agentId);
  }

  public async openDialog(date: any): Promise<any> {
    const temp = this.interventions;

    this.interventions = null;
    this.interventions = await this._formService.openFormWizardAsync(this.agentId, 'interventions', { data: this.interventions, date: date })
    if (!this.interventions) {
      this.interventions = temp;
    }
  }

  public async generatePdfFileAsync() {
    this.processing = true;
    this.processing = await this._formService.generatePdfFileAsync(this.pdfData, 'apz_intervencie');
  }
}
