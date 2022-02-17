import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { eFormsModule } from '../forms/forms.module';
import { ComponentsModule } from '../components/components.module';

import { AppLayoutRoutes } from './layout.routing.module';
import { AppLayoutComponent } from './layout.component';

import { ProcessingComponent } from '../pages/processing/processing.component';
import { SpinnerModule } from '../common/spinner/spinner.module';

import { AgentsComponent } from '../pages/agents/agents.component';
import { AgentWizardComponent } from '../pages/agents/agent-wizard/agent-wizard.component';
import { AgentDetailComponent } from '../pages/agent-detail/agent-detail.component';
import { ReportsComponent } from '../pages/reports/reports.component';
import { ReportWizardComponent } from '../pages/reports/report-wizard/report-wizard.component';

import { AdminQueriesService } from '../services/admin-queries/admin-queries.service';
import { InterventionsFormService } from '../services/forms/interventions.form.service';
import { EnlightenmentsFormService } from '../services/forms/enlightenment.form.service';
import { ActivitiesService } from '../services/forms/activity.service';
import { ReportsService } from '../services/reports/reports.service';
import { CovidMonitoringFormService } from '../services/forms/covid-monitoring.service';

import { PdfService } from '../services/reports/pdf.service';
import { ExcelService } from '../services/reports/excel.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    eFormsModule,
    SpinnerModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatTooltipModule,
    MatIconModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forChild(AppLayoutRoutes),
  ],
  declarations: [
    AppLayoutComponent,
    ProcessingComponent,
    AgentsComponent,
    AgentWizardComponent,
    AgentDetailComponent,
    ReportsComponent,
    ReportWizardComponent
  ],
  providers: [
    InterventionsFormService,
    EnlightenmentsFormService,
    CovidMonitoringFormService,
    ActivitiesService,
    AdminQueriesService,
    ReportsService,
    PdfService,
    ExcelService
  ]
})

export class AppLayoutModule { }
