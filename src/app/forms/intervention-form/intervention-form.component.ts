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

  public currentDay: Date;
  public reportDate: Date;
  public processing: boolean;

  public dataProcessing: boolean;
  public interventions: any;

  constructor(
    private _formService: FormCommonService,
    private _route: ActivatedRoute,
  ) {
    this.agentId = this._route.snapshot.paramMap.get('agentId');
    this.currentDay = new Date();
    this.reportDate = new Date();
  }

  async ngOnInit() {
    this.interventions = await this._formService.getFormData('interventions', this.agentId, this.reportDate);

    this.isAdmin = !!GlobalConstants.currentUserGroups && GlobalConstants.currentUserGroups.includes('admin');
    if (this.isAdmin) {
      this.agentName = this._formService.setAgentDetails();
    }
  }

  public goBackToAgent() {
    this._formService.goBackToAgent(this.agentId);
  }

  public async openDialog(date: any): Promise<any> {
    try {
      this.processing = true;
      const response = await this._formService.openFormWizardAsync(this.agentId, 'interventions', { data: this.interventions, date: date, agent_id: this.agentId });
      this._handleResponse(response);
    } catch (err: any) {
      console.error(err);
      this.processing = false;
    }
  }

  public async onMonthChangedAsync(date: any): Promise<any> {
    try {
      this.processing = true;
      this.reportDate = date;
      const data = await this._formService.getFormData('interventions', this.agentId, this.reportDate.toString());
      this.interventions = data;

      this.processing = false;
    } catch (err: any) {
      console.error(err);
      this.processing = false;
    }
  }

  private _handleResponse(response: any) {
    if (!!response && Array.isArray(response)) {
      this.interventions = null;
      setTimeout(() => {
        this.interventions = response;
        this.processing = false;
      }, 250);
    } else {
      this.processing = false;
    }
  }
}
