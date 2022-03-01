import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { EnlightenmentsFormService } from "../forms/enlightenment.form.service";
import { ReportWizardComponent } from ".././../pages/reports/report-wizard/report-wizard.component";

import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import * as fs from 'file-saver';

import { InterventionsFormService } from "../forms/interventions.form.service";
import { CovidMonitoringFormService } from "../forms/covid-monitoring.service";
import { PdfService } from "./pdf.service";
import { ActivitiesService } from "../forms/activity.service";
import { ExcelService } from "./excel.service";
import { Workbook } from "exceljs";

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({ providedIn: 'root', })

export class ReportsService {

    constructor(
        public dialog: MatDialog,
        private _interventionService: InterventionsFormService,
        private _enlightenmentsFormService: EnlightenmentsFormService,
        private _covidMonitoringService: CovidMonitoringFormService,
        private _activitiesService: ActivitiesService,
        private _pdfService: PdfService,
        private _excelService: ExcelService,
    ) { }

    public async populateExcelReportDataAsync(type: string, agents: Array<any>, reports: Array<any>, summaryReport?: boolean): Promise<any> {
        try {

            let report: any = { summary_work_book: new Workbook() };
            if (!summaryReport) {
                report = reports.find((x: any) => x.type === type);
                if (!report) {
                    return null;
                }
            }

            const dateRange: any = await this.openDialogAsync('excel', report.type);
            if (!dateRange) {
                return null;
            }

            if (report.summary_work_book || report.type === 'intervention') {
                report.data = await this._interventionService.getInterventionsReportAsync(dateRange.fromDate, dateRange.toDate);
                await this._excelService.generateInterventionExcelFileAsync(dateRange, agents, report.data, report.summary_work_book);
            }
            if (report.summary_work_book || report.type === 'enlightenment') {
                report.data = await this._enlightenmentsFormService.getEnlightenmentsReportAsync(dateRange.fromDate, dateRange.toDate);
                await this._excelService.generateEnlightenmentExcelFileAsync(dateRange, agents, report.data, report.summary_work_book);
            }
            if (report.summary_work_book || report.type === 'covid_monitoring') {
                report.data = await this._covidMonitoringService.getCovidMonitoringReportAsync(dateRange.fromDate, dateRange.toDate);
                await this._excelService.generateCovidMonitoringExcelFileAsync(dateRange, agents, report.data, report.summary_work_book);
            }
            if (report.summary_work_book || report.type === 'activity') {
                report.data = await this._activitiesService.getActivitiesAsync(new Date(), dateRange.fromDate, dateRange.toDate);
                await this._excelService.generateActivityExcelFileAsync(dateRange, agents, report.data, report.summary_work_book);
            }

            if (report.summary_work_book) {
                const range = this._excelService._getDateRange(dateRange);
                const fileName = `${range}_EVIDENCIA.xlsx`;

                const xlsxData = await report.summary_work_book.xlsx.writeBuffer();
                let blob = new Blob([xlsxData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                fs.saveAs(blob, fileName);
            }
            return report;
        } catch (err: any) {
            console.error(err);
            return null;
        }
    }

    public async populatePdfReportDataAsync(type: string, agents: any, reports: any): Promise<any> {
        try {
            const report = reports.find((x: any) => x.type === type);
            if (!report) {
                return null;
            }
            const response: any = await this.openDialogAsync('pdf', report.type, agents);
            if (!response) {
                return null;
            }

            const selectedAgent = agents.find((x: any) => x.user_id === response.agentId);

            let data: any;
            if (type === 'intervention') {
                data = await this._interventionService.getInterventionsAsync(response.agentId, new Date());
                if (!!data)
                    await this._pdfService.generateInterventionExcelFileAsync(selectedAgent, data);
            } else if (type === 'enlightenment') {
                data = await this._enlightenmentsFormService.getEnlightenmentsReportAsync(new Date(), undefined, response.agentId);
                if (!!data)
                    await this._pdfService.generateEnlightenmentExcelFileAsync(selectedAgent, data);
            } else if (type === 'activity') {
                data = await this._activitiesService.getActivitiesByUserIdAsync(new Date(), response.agentId);
                if (!!data)
                    await this._pdfService.generateActivityExcelFileAsync(selectedAgent, data);
            }

            if (!data) {
                console.warn('Dáta Nenájdené');
            }
        } catch (err: any) {
            console.error(err);
            return null;
        }
    }

    public exportAsExcelFile(json: any, excelFileName: string): void {
        // const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
        const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(json);
        const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        this._saveAsExcelFile(excelBuffer, excelFileName);
    }

    public async openDialogAsync(reportType: string, type: string, agents?: any) {
        const wizarConfig: any = {
            panelClass: 'my-dialog-reports', disableClose: true, data: { report_type: reportType, type: type, agents: agents }
        }

        const dialogRef = this.dialog.open(ReportWizardComponent, wizarConfig);
        const dialogRes = await dialogRef.afterClosed().toPromise()

        return dialogRes?.data;
    }

    private _saveAsExcelFile(buffer: any, fileName: string): void {
        const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }
}