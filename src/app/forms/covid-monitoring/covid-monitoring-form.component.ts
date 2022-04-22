import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalConstants } from '../../common/global-constants';

import { FormCommonService } from '../../services/forms/common.service';

@Component({
    selector: 'app-covid-monitoring-form',
    templateUrl: './covid-monitoring-form.component.html',
    styleUrls: ['./covid-monitoring-form.component.css']
})
export class MonitoringCovidFormComponent implements OnInit {
    public processing: boolean;
    public agentId: string | null;
    public agentIsAdmin: boolean;
    public agentName: string;

    public dateToday: Date;

    public covidData: any;

    constructor(
        private _route: ActivatedRoute,
        private _formService: FormCommonService,
    ) {
        this.agentId = this._route.snapshot.paramMap.get('agentId');
        this.dateToday = new Date();
    }

    async ngOnInit() {
        this.covidData = await this._formService.getFormData('covid_monitoring', this.agentId, this.dateToday);
        this.agentIsAdmin = !!GlobalConstants.currentUserGroups && GlobalConstants.currentUserGroups.includes('admin');
    }

    public goBackToAgent() {
        this._formService.goBackToAgent(this.agentId);
    }

    public async openDialog(date: any): Promise<any> {
        try {
            this.processing = true;
            const response = await this._formService.openFormWizardAsync(this.agentId, 'covid_monitoring', { data: this.covidData, date: date, agent_id: this.agentId });
            this._handleResponse(response);
        } catch (err: any) {
            console.error(err);
            this.processing = false;
        }
    }

    private _handleResponse(response: any) {
        if (!!response && Array.isArray(response)) {
            this.covidData = null;
            setTimeout(() => {
                this.covidData = response;
                this.processing = false;
            }, 250);
        } else {
            this.processing = false;
        }
    }
}