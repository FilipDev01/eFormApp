import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InterventionFormComponent } from './intervention-form/intervention-form.component';
import { InterventionWizardComponent } from './intervention-form/intervention-wizard/intervention-wizard.component';
import { ActivityFormComponent } from './activity-form/activity-form.component';
import { ActivityTableComponent } from './activity-form/activity-table/activity-table.component';

import { EnlightenmentFormComponent } from './enlightenment-form/enlightenment-form.component';
import { EnlightenmentstionWizardComponent } from './enlightenment-form/enlightenments-wizard/enlightenments-wizard.component';

import { CalendarModule } from '../common/calendar/calendar.module';
import { CustomDateAdapter } from '../common/customDateAdapter/customDateAdapter';
import { SpinnerModule } from '../common/spinner/spinner.module'

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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatTableModule } from '@angular/material/table';

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
        MatCheckboxModule,
        MatSelectModule,
        MatExpansionModule,
        MatTableModule,
        CalendarModule,
        SpinnerModule
    ],
    declarations: [
        InterventionFormComponent,
        InterventionWizardComponent,
        ActivityFormComponent,
        ActivityTableComponent,
        EnlightenmentFormComponent,
        EnlightenmentstionWizardComponent
    ],
    exports: [
        InterventionFormComponent,
        ActivityFormComponent,
        EnlightenmentFormComponent
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

