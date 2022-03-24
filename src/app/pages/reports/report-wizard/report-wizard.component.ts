import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-report-wizard',
    templateUrl: './report-wizard.component.html',
    styleUrls: ['./report-wizard.component.css']
})
export class ReportWizardComponent {
    public maxDate: Date = new Date();

    public dateRangeForm: FormGroup;
    public pdfDataForm: FormGroup;

    public reportType: string;
    public reportName: any;
    public agents: any;
    public filteredAgents: any;

    constructor(
        @Inject(MAT_DIALOG_DATA) public dialogData: any,
        public dialogRef: MatDialogRef<ReportWizardComponent>,
        private formBuilder: FormBuilder,
    ) {
        this.agents = this.dialogData.agents;
        this.filteredAgents = this.agents.slice();
        
        this.reportType = "excel";
        if (!!this.dialogData && this.dialogData.report_type === 'pdf') {
            this.reportType = "pdf";
        }
        this._setHeaderName();

        if (this.reportType === 'excel') {
            this.dateRangeForm = this.formBuilder.group({
                fromDate: new FormControl('', Validators.required),
                toDate: new FormControl('', Validators.required)
            });
        }

        if (this.reportType === 'pdf') {
            this.pdfDataForm = this.formBuilder.group({
                pdfFormType: new FormControl('1', null),
                agentId: new FormControl(this.agents[0].user_id, null)
            });
        }
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    confirm() {
        this.dialogRef.close({ data: this.getWizardFormData() });
    }

    confirmPdf() {
        const formData: any = {};
        Object.assign(formData, this.pdfDataForm.getRawValue());

        this.dialogRef.close({ data: formData });
    }

    getWizardFormData() {
        const formData: any = {};
        Object.assign(formData, this.dateRangeForm.getRawValue());

        // Add +1 Day as reports are getting values less than
        // Dat is set to midnight son only data from previous date will be selected
        if (formData.toDate) {
            formData.toDate.setDate(formData.toDate.getDate() + 1);
        }
        return formData;
    }

    private _setHeaderName() {
        if (this.dialogData?.type === 'intervention') {
            this.reportName = 'Intervencie';
        } else if (this.dialogData?.type === 'enlightenment') {
            this.reportName = 'Zdravotná Osveta';
        } else if (this.dialogData?.type === 'covid_monitoring') {
            this.reportName = 'Monitoring Covid';
        } else if (this.dialogData?.type === 'summary') {
            this.reportName = 'Súhrný Report';
        } else if (this.reportType === 'pdf') {
            this.reportName = 'Generuj PDF Report';
        } else {
            this.reportName = 'Definuj Časové Rozpätie';
        }
    }
}