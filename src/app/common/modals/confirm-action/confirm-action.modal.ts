import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'app-confirm-action-modal',
    templateUrl: './confirm-action.modal.html',
    styleUrls: ['./confirm-action.modal.css']
})
export class ConfirmActionModal {
    constructor(
        public dialogRef: MatDialogRef<ConfirmActionModal>
    ) { }

    close(): void {
        this.dialogRef.close({ confirmed: false });
    }

    confirm() {
        this.dialogRef.close({ confirmed: true });
    }
}