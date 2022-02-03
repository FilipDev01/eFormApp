import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import jsPDF from 'jspdf'
import html2canvas from 'html2canvas';

import { EnlightenmentstionWizardComponent } from '../../forms/enlightenment-form/enlightenments-wizard/enlightenments-wizard.component';
import { InterventionWizardComponent } from '../../forms/intervention-form/intervention-wizard/intervention-wizard.component';
import { InterventionsFormService } from './interventions.form.service';
import { EnlightenmentsFormService } from './enlightenment.form.service';
import { Enlightenments, Interventions } from '../graphql/graphql.service';
import { GlobalConstants } from '../../common/global-constants';

@Injectable({ providedIn: 'root', })
export class FormCommonService {

    constructor(
        public dialog: MatDialog,
        private _enlightenmentsFormService: EnlightenmentsFormService,
        private _interventionsFormService: InterventionsFormService,
        private _router: Router
    ) { }

    goBackToAgent(agentId: string | null) {
        const route = !!agentId ? `/agent/${agentId}` : '/processing';
        this._router.navigate([route]);
    }

    async getFormData(type: string, agentId: string | null): Promise<any> {
        if (!agentId) {
            return null;
        }

        if (type === 'enlightenments') {
            return await this._enlightenmentsFormService.getEnlightenmentsAsync(agentId);
        } else if (type === 'interventions') {
            return await this._interventionsFormService.getInterventionsAsync(agentId);
        }

        return null;
    }

    // Wizard (Dialog/Modal) Methods
    async openFormWizardAsync(agentId: string | null, type: string, wizardData: any): Promise<any> {
        if (!agentId) {
            return null;
        }

        const wizardType: any = this._selectFormWizardType(type);
        const wizarConfig: any = {
            panelClass: 'my-dialog-enlightenments', data: { form_data: wizardData.data, date: wizardData.date }
        }

        const dialogRef = this.dialog.open(wizardType, wizarConfig);
        const dialogRes = await dialogRef.afterClosed().toPromise()
        if (!dialogRes?.data) {
            return null;
        }

        return this._handleWizardResponseAsync(type, dialogRes, agentId);
    }

    private _selectFormWizardType(type: string) {
        if (type === 'enlightenments') {
            return EnlightenmentstionWizardComponent;
        } else if (type === 'interventions') {
            return InterventionWizardComponent;
        }
        return null;
    }

    private async _handleWizardResponseAsync(type: string, wizardData: any, agentId: string) {
        let response: any;
        if (type === 'enlightenments') {
            response = await this._enlightenmentsFormService.createEnlightenmentAsync(wizardData, agentId);
        } else if (type === 'interventions') {
            response = await this._interventionsFormService.createInterventionAsync(wizardData, agentId);
        }

        if (!response) {
            return new Array<any>();
        }

        return this.getFormData(type, agentId);
    }


    // GENEREATE PDF METHODS
    generatePdfData(formType: string, data: Array<any>) {
        if (!data) { return null; }

        const daysInMonth = this._getDaysInCurrentMonth();
        const rows: Array<any> = new Array<any>();

        daysInMonth.forEach((date: any) => {
            let int = data.find((x: any) => x.date === date);
            int = !!int ? int : this._populateEmptyFormRow(formType);
            rows.push(int);
        });

        rows.forEach((row: any, i: number) => {
            row.day_int = (i + 1);
        });

        const pdfData = new Array<any>();
        pdfData.push(rows.slice(0, 16));
        pdfData.push(rows.slice(16));

        return pdfData;
    }

    generatePdfTotals(formType: string, data: Array<any>) {
        if (!data) { return {}; }

        const keys = Object.keys(data[0]);
        const filteredKeys = keys.filter((key: string) => !['__typename', 'id', 'user_id', 'date', 'createdAt', 'updatedAt', 'day_int'].includes(key));

        const totalObj: any = {};
        if (formType === 'interventions') {
            filteredKeys.forEach((key: string) => {
                totalObj[key] = data.map(a => a[key]).reduce((a, b) => a + b, 0);
            });
        }

        return totalObj;
    }

    async generatePdfFileAsync(pdfData: Array<any> | null, fileName: string): Promise<boolean> {
        try {
            if (!pdfData) { return false; }

            const canvasesAsync = Array<Promise<any>>();
            pdfData.forEach(async (element: any, ind: number) => {
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

                pdf.save(`${fileName}.pdf`);
            }

            return false;
        } catch (err: any) {
            return false;
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
        }

        return null;
    }

    private _populateEmptyFormRow(type: string) {
        if (type === 'interventions') {
            const intervention: Interventions = {
                __typename: "Interventions",
                id: 'dummy',
                createdAt: 'dummy',
                updatedAt: 'dummy'
            };

            return intervention;
        } else if (type === 'enlightenments') {
            const enlightenment: Enlightenments = {
                __typename: "Enlightenments",
                id: 'dummy',
                createdAt: 'dummy',
                updatedAt: 'dummy'
            };

            return enlightenment;
        }

        return {};
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

    // SET AGENT DETAILS 
    public setAgentDetails() {
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

        return agent.name;
    }
}