import { Routes } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { TeamsComponent } from '../pages/teams/teams.component';

export const AppLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'teams', component: TeamsComponent }
]
