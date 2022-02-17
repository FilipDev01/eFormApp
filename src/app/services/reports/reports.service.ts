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


    public generateSummaryReport(reports: Array<any>) {
        try {
            if (!!reports && reports.length > 0) {
                const workbook: XLSX.WorkBook = { Sheets: {}, SheetNames: [] };
                reports.forEach((report: any) => {
                    let sheetName = "Intervencie";
                    if (report.type === 'enlightenment') {
                        sheetName = "Osveta";
                    } else if (report.type === 'covid_monitoring') {
                        sheetName = "Covid";
                    }

                    const nativeEl = report.tableEl.nativeElement;

                    if (!!nativeEl) {
                        const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(nativeEl);
                        workbook.Sheets[sheetName] = worksheet;
                        workbook.SheetNames.push(sheetName);
                    }
                });

                const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
                this._saveAsExcelFile(excelBuffer, 'Summary');
            }
            return null;
        } catch (err: any) {
            console.error(err);
            return null
        }
    }

    public generateSingleReport(tableEl: any, type: string) {
        this.exportAsExcelFile(tableEl, 'test');
    }

    public async populateSummaryReportAsync(reports: Array<any>): Promise<any> {
        try {
            const dateRange: any = await this.openDialogAsync("excel", "summary");
            if (!dateRange) {
                return null;
            }

            const interventions = await this._interventionService.getInterventionsReportAsync(dateRange.fromDate, dateRange.toDate);
            const enlightenments = await this._enlightenmentsFormService.getEnlightenmentsReportAsync(dateRange.fromDate, dateRange.toDate);
            const covidMonitoring = await this._covidMonitoringService.getCovidMonitoringReportAsync(dateRange.fromDate, dateRange.toDate);
            if (!!reports) {
                reports.find((x: any) => x.type === 'intervention').data = interventions;
                reports.find((x: any) => x.type === 'enlightenment').data = enlightenments;
                reports.find((x: any) => x.type === 'covid_monitoring').data = covidMonitoring;
            }
        } catch (err: any) {
            console.error(err);
            return null;
        }
    }

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
                const fileName = `Overal.xlsx`;
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
                await this._pdfService.generateInterventionExcelFileAsync(selectedAgent, data);
            } else if (type === 'enlightenment') {
                // var temp = '[{"id":"082127a4-5794-469d-bb80-db93928f3ac0","user_id":"0e23d2dd-27e1-489b-b027-c1986a88a138","date":"2022-02-03T00:00:00.000Z","no_individuals":0,"no_families":0,"no_people_in_families":0,"school_name":"","no_students":0,"community_center_name":"","no_community_center_members":0,"enlightenmentCodes":{"items":[],"nextToken":null,"startedAt":null},"createdAt":"2022-02-16T17:10:06.896Z","updatedAt":"2022-02-16T17:10:06.896Z"},{"id":"265865f7-b1d8-4fb8-92a2-ed024a0a0b4c","user_id":"0e23d2dd-27e1-489b-b027-c1986a88a138","date":"2022-02-04T00:00:00.000Z","no_individuals":0,"no_families":0,"no_people_in_families":0,"school_name":"","no_students":0,"community_center_name":"","no_community_center_members":0,"enlightenmentCodes":{"items":[],"nextToken":null,"startedAt":null},"createdAt":"2022-02-16T17:10:09.816Z","updatedAt":"2022-02-16T17:10:09.816Z"},{"id":"8b7e9bbe-8a5b-4297-956f-68339257735f","user_id":"0e23d2dd-27e1-489b-b027-c1986a88a138","date":"2022-02-09T00:00:00.000Z","no_individuals":0,"no_families":0,"no_people_in_families":0,"school_name":"","no_students":0,"community_center_name":"","no_community_center_members":0,"enlightenmentCodes":{"items":[],"nextToken":null,"startedAt":null},"createdAt":"2022-02-16T17:10:18.310Z","updatedAt":"2022-02-16T17:10:18.310Z"},{"id":"414768c1-448a-4f80-bce4-c6bb453fc0c0","user_id":"0e23d2dd-27e1-489b-b027-c1986a88a138","date":"2022-02-02T00:00:00.000Z","no_individuals":5,"no_families":0,"no_people_in_families":0,"school_name":"Test skola","no_students":1,"community_center_name":"KLC test","no_community_center_members":2,"enlightenmentCodes":{"items":[{"id":"403ceb2d-ef3f-4b04-884b-ce9b34bc49dc","agentEnlightenmentID":"414768c1-448a-4f80-bce4-c6bb453fc0c0","type":0,"f1":null,"f2":2,"f3":2,"f4":1,"f5":null,"f6":null,"f7":null,"f8":null,"f9":null,"f10":null,"f11":null,"f12":null,"f13":null,"f14":null,"f15":null,"f16":null,"f17":null,"f18":null,"f19":null,"f20":null,"f21":null,"f22":null,"f23":null,"f24":null,"f25":null,"f26":null,"f27":null,"f28":null,"f29":null,"f30":null,"createdAt":"2022-02-16T17:10:01.691Z","updatedAt":"2022-02-16T17:10:01.691Z"},{"id":"b629f0bb-afb9-4bf7-8a03-ed00313fc043","agentEnlightenmentID":"414768c1-448a-4f80-bce4-c6bb453fc0c0","type":2,"f1":null,"f2":1,"f3":null,"f4":null,"f5":null,"f6":null,"f7":null,"f8":null,"f9":null,"f10":null,"f11":null,"f12":null,"f13":null,"f14":null,"f15":null,"f16":null,"f17":null,"f18":null,"f19":null,"f20":null,"f21":null,"f22":null,"f23":null,"f24":null,"f25":null,"f26":null,"f27":null,"f28":null,"f29":null,"f30":null,"createdAt":"2022-02-16T17:10:01.721Z","updatedAt":"2022-02-16T17:10:01.721Z"},{"id":"f81a4ddb-a584-48e4-8729-36497256d456","agentEnlightenmentID":"414768c1-448a-4f80-bce4-c6bb453fc0c0","type":3,"f1":null,"f2":null,"f3":null,"f4":null,"f5":null,"f6":null,"f7":null,"f8":null,"f9":null,"f10":null,"f11":null,"f12":null,"f13":null,"f14":null,"f15":null,"f16":null,"f17":null,"f18":null,"f19":1,"f20":null,"f21":null,"f22":null,"f23":null,"f24":null,"f25":1,"f26":null,"f27":null,"f28":null,"f29":null,"f30":null,"createdAt":"2022-02-16T17:10:01.718Z","updatedAt":"2022-02-16T17:10:01.718Z"}],"nextToken":null,"startedAt":null},"createdAt":"2022-02-16T17:10:01.446Z","updatedAt":"2022-02-16T17:10:01.446Z"},{"id":"f49f9205-be7b-4e19-9de5-dc53d92c8b6b","user_id":"0e23d2dd-27e1-489b-b027-c1986a88a138","date":"2022-02-08T00:00:00.000Z","no_individuals":0,"no_families":0,"no_people_in_families":0,"school_name":"","no_students":0,"community_center_name":"","no_community_center_members":0,"enlightenmentCodes":{"items":[],"nextToken":null,"startedAt":null},"createdAt":"2022-02-16T17:10:15.870Z","updatedAt":"2022-02-16T17:10:15.870Z"},{"id":"2964de50-6c07-4275-8805-723e879f5b3e","user_id":"0e23d2dd-27e1-489b-b027-c1986a88a138","date":"2022-02-01T00:00:00.000Z","no_individuals":3,"no_families":0,"no_people_in_families":0,"school_name":"","no_students":0,"community_center_name":"","no_community_center_members":0,"enlightenmentCodes":{"items":[{"id":"88bb9123-efa3-4118-b91e-5c8e7283a0e5","agentEnlightenmentID":"2964de50-6c07-4275-8805-723e879f5b3e","type":0,"f1":null,"f2":3,"f3":null,"f4":null,"f5":null,"f6":null,"f7":null,"f8":null,"f9":null,"f10":null,"f11":null,"f12":null,"f13":null,"f14":null,"f15":null,"f16":null,"f17":null,"f18":null,"f19":null,"f20":null,"f21":null,"f22":null,"f23":null,"f24":null,"f25":null,"f26":null,"f27":null,"f28":null,"f29":null,"f30":null,"createdAt":"2022-02-14T09:38:53.791Z","updatedAt":"2022-02-14T09:38:53.791Z"}],"nextToken":null,"startedAt":null},"createdAt":"2022-02-14T09:38:53.538Z","updatedAt":"2022-02-14T09:38:53.538Z"},{"id":"44db302c-8d69-479f-9cb7-39d551a04ad4","user_id":"0e23d2dd-27e1-489b-b027-c1986a88a138","date":"2022-02-07T00:00:00.000Z","no_individuals":0,"no_families":0,"no_people_in_families":0,"school_name":"","no_students":0,"community_center_name":"","no_community_center_members":0,"enlightenmentCodes":{"items":[],"nextToken":null,"startedAt":null},"createdAt":"2022-02-16T17:10:13.461Z","updatedAt":"2022-02-16T17:10:13.461Z"}]';
                // data = await Promise.resolve(JSON.parse(temp));

                data = await this._enlightenmentsFormService.getEnlightenmentsReportAsync(new Date(), undefined, response.agentId);
                await this._pdfService.generateEnlightenmentExcelFileAsync(selectedAgent, data);
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