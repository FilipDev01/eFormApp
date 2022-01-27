import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogOverviewExampleDialog, InterventionFormComponent } from './intervention-form/intervention-form.component';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@NgModule({
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatStepperModule,
        MatDialogModule,
    ],
    declarations: [
        InterventionFormComponent,
        DialogOverviewExampleDialog
    ],
    exports: [
        InterventionFormComponent
    ],
    providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
    ]
})
export class eFormsModule { }
