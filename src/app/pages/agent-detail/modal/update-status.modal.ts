import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'app-update-status',
    templateUrl: './update-status.modal.html',
    styleUrls: ['./update-status.modal.css']
})
export class UpdateStatusModal {
    public status: string;

    constructor(
        @Inject(MAT_DIALOG_DATA) public dialogData: any,
        public dialogRef: MatDialogRef<UpdateStatusModal>
    ) {
        this.status = !!this.dialogData?.status?.value ? this.dialogData?.status?.value : 'inactive';
    }

    close(): void {
        this.dialogRef.close({ confirmed: false });
    }

    confirm() {
        this.dialogRef.close({ confirmed: true, status: this.status });
    }
}