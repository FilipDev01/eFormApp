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

import { AppLayoutRoutes } from './layout.routing.module';
import { ComponentsModule } from '../components/components.module';
import { AppLayoutComponent } from './layout.component';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { TeamsComponent } from '../pages/teams/teams.component';
import { InterventionsFormService } from '../services/forms/interventions.form.service';
import { eFormsModule } from '../forms/forms.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    eFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatTooltipModule,
    RouterModule.forChild(AppLayoutRoutes),
  ],
  declarations: [
    AppLayoutComponent,
    DashboardComponent,
    TeamsComponent,
  ],
  providers: [
    InterventionsFormService
  ]
})

export class AppLayoutModule { }
