import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GlobalConstants } from '../../common/global-constants';
import { FormCommonService } from '../../services/forms/common.service';

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

  public enlightenments: any;
  public pdfData: Array<any> | null;

  constructor(
    private _route: ActivatedRoute,
    private _formService: FormCommonService,
  ) {
    this.agentId = this._route.snapshot.paramMap.get('agentId');
    this.dateToday = new Date();
  }

  async ngOnInit() {
    this.enlightenments = await this._formService.getFormData('enlightenments', this.agentId);

    this.agentIsAdmin = !!GlobalConstants.currentUserGroups && GlobalConstants.currentUserGroups.includes('admin');
    if (this.agentIsAdmin) {
      this.agentName = this._formService.setAgentDetails();
      this.pdfData = this._formService.generatePdfData('interventions', this.enlightenments);
    }
  }

  public goBackToAgent() {
    this._formService.goBackToAgent(this.agentId);
  }

  async openDialog(date: any): Promise<any> {
    this.enlightenments = await this._formService.openFormWizardAsync(this.agentId, 'enlightenments', { data: this.enlightenments, date: date });
  }

  public async generatePdfFileAsync() {
    this.processing = true;
    this.processing = await this._formService.generatePdfFileAsync(this.pdfData, 'apz_intervencie');
  }
}
