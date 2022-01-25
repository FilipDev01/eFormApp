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


import { AppLayoutRoutes } from './layout.routing.module';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ComponentsModule } from '../components/components.module';
import { AppLayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    RouterModule.forChild(AppLayoutRoutes),
  ],
  declarations: [
    AppLayoutComponent,
    DashboardComponent,
  ],
})

export class AppLayoutModule { }
