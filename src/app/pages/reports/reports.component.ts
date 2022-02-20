import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from '../../common/global-constants';
import { ReportsService } from '../../services/reports/reports.service';

@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
    @Input() agents: Array<any>;

    public processing: boolean;
    public reports: Array<any>;
    public generateSummaryReport: boolean;

    public pdfInterventions: any;

    constructor(
        private _service: ReportsService,
        private _router: Router
    ) {

        this.reports = [
            { name: 'Intervencie', type: 'intervention', data: null, tableEl: null },
            { name: 'Zdravotná Osveta', type: 'enlightenment', data: null, tableEl: null },
            { name: 'Monitoring Covid', type: 'covid_monitoring', data: null, tableEl: null },
            { name: 'Aktivity', type: 'activity', data: null, tableEl: null },
        ];
    }

    async ngOnInit() {
        GlobalConstants.selectedAgent = null;
    }

    goToAgentDetails(agent: any) {
        GlobalConstants.selectedAgent = agent;
        this._router.navigate(['/agent', agent.username]);
    }

    async populateSummaryReportAsync() {
        try {
            this.processing = true;
            this.generateSummaryReport = true;
            await this._service.populateExcelReportDataAsync('summary_report', this.agents, this.reports, true);
            this.processing = false;
        } catch (err: any) {
            console.error(err);
            this.generateSummaryReport = false;
            this.processing = false;
        }
    }

    async populatePdfReportDataAsync(type: string) {
        try {
            this.processing = true;
            await this._service.populatePdfReportDataAsync(type, this.agents, this.reports);
            this.processing = false;
        } catch (err: any) {
            this.processing = false;
            console.error(err);
        }
    }

    async populateExcelReportDataAsync(type: string): Promise<any> {
        try {
            this.processing = true;
            await this._service.populateExcelReportDataAsync(type, this.agents, this.reports, false);
            this.processing = false;
        } catch (err: any) {
            this.processing = false;
            console.error(err);
        }
    }
}
