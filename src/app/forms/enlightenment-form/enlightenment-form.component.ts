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

  constructor(
    private _route: ActivatedRoute,
    private _formService: FormCommonService,
  ) {
    this.agentId = this._route.snapshot.paramMap.get('agentId');
    this.dateToday = new Date();
  }

  async ngOnInit() {
    this.enlightenments = await this._formService.getFormData('enlightenments', this.agentId, this.dateToday);

    this.agentIsAdmin = !!GlobalConstants.currentUserGroups && GlobalConstants.currentUserGroups.includes('admin');
    if (this.agentIsAdmin) {
      this.agentName = this._formService.setAgentDetails();
    }
  }

  public goBackToAgent() {
    this._formService.goBackToAgent(this.agentId);
  }

  async openDialog(date: any): Promise<any> {
    try {
      this.processing = true;
      const response = await this._formService.openFormWizardAsync(this.agentId, 'enlightenments', { data: this.enlightenments, date: date });
      this._handleResponse(response);
    } catch (err: any) {
      console.log(err);
      this.processing = false;
    }
  }

  private _handleResponse(response: any) {
    if (!!response && Array.isArray(response)) {
      this.enlightenments = null;
      setTimeout(() => {
        this.enlightenments = response;
        this.processing = false;
      }, 250);
    } else {
      this.processing = false;
    }
  }
}
