import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

export const AppLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
]
