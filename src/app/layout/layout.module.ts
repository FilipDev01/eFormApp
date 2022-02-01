import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';

import { eFormsModule } from '../forms/forms.module';
import { ComponentsModule } from '../components/components.module';

import { AppLayoutRoutes } from './layout.routing.module';

import { AppLayoutComponent } from './layout.component';
import { ProcessingComponent } from '../pages/processing/processing.component';
import { AgentsComponent } from '../pages/agents/agents.component';
import { AgentDetailComponent } from '../pages/agent-detail/agent-detail.component';

import { InterventionsFormService } from '../services/forms/interventions.form.service';
import { AdminQueriesService } from '../services/admin-queries/admin-queries.service';
import { MatDividerModule } from '@angular/material/divider';
import { SpinnerModule } from '../common/spinner/spinner.module';


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
    MatDividerModule,
    RouterModule.forChild(AppLayoutRoutes),
  ],
  declarations: [
    AppLayoutComponent,
    ProcessingComponent,
    AgentsComponent,
    AgentDetailComponent
  ],
  providers: [
    InterventionsFormService,
    AdminQueriesService
  ]
})

export class AppLayoutModule { }
