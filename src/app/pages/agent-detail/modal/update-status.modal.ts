import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'app-update-status',
    templateUrl: './update-status.modal.html',
    styleUrls: ['./update-status.modal.css']
})
export class UpdateStatusModal {
    public statuses: Array<any>;
    public status: string;

    constructor(
        @Inject(MAT_DIALOG_DATA) public dialogData: any,
        public dialogRef: MatDialogRef<UpdateStatusModal>
    ) {
        this.statuses = [
            { value: 'active', label: 'V Práci' },
            { value: 'break', label: 'Prestávka' },
            { value: 'inactive', label: 'Neaktívny' },
            { value: 'holidays', label: 'Dovolenka' },
            { value: 'holidays_hd', label: 'Dovolenka poldeň ' },
            { value: 'ill', label: 'PN' },
            { value: 'parenting', label: 'OČR' },
            { value: 'doctor', label: 'Lekár' },
            { value: 'doctor_hd', label: 'Lekár poldeň' },
            //{ value: 'other', label: 'Iné' },
        ];

        this.status = this.statuses[0].value;
    }

    close(): void {
        this.dialogRef.close({ confirmed: false });
    }

    confirm() {
        this.dialogRef.close({ confirmed: true, status: this.status });
    }
}