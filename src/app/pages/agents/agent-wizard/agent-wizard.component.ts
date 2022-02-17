import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-agent-wizard',
    templateUrl: './agent-wizard.component.html',
    styleUrls: ['./agent-wizard.component.css']
})
export class AgentWizardComponent {
    public agent: any;
    public selectedForm: any;

    constructor(
        @Inject(MAT_DIALOG_DATA) public dialogData: any,
        public dialogRef: MatDialogRef<AgentWizardComponent>,
    ) {
        this.agent = this.dialogData?.agent;
        this.selectedForm = "1";
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    generatePDF() {
        this.dialogRef.close({ data: this.getWizardFormData() });
    }

    getWizardFormData() {
        const formData: any = {form_type: this.selectedForm};
        return formData;
    }
}