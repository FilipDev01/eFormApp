import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InterventionFormComponent } from './intervention-form/intervention-form.component';
import { InterventionWizardComponent } from './intervention-form/intervention-wizard/intervention-wizard.component';

import { CalendarModule } from '../common/calendar/calendar.module';
import { CustomDateAdapter } from '../common/customDateAdapter/customDateAdapter';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateAdapter, MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';


import sk from '@angular/common/locales/sk';
import { registerLocaleData } from '@angular/common';
registerLocaleData(sk);

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatNativeDateModule,
        MatDividerModule,
        MatBadgeModule,
        CalendarModule
    ],
    declarations: [
        InterventionFormComponent,
        InterventionWizardComponent,
    ],
    exports: [
        InterventionFormComponent
    ],
    providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: DateAdapter, useClass: CustomDateAdapter },
        { provide: MatDialogRef, useValue: {} },
        { provide: LOCALE_ID, useValue: 'sk' }
    ]
})

export class eFormsModule {
    constructor(private dateAdapter: DateAdapter<Date>) {
        this.dateAdapter.setLocale('sk');
    }
}

