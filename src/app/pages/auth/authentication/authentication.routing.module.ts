import { Routes } from '@angular/router';
import { AuthenticationLoginComponent } from './pages/login/login.component';
import { AuthenticationRegisterComponent } from './pages/register/register.component';

export const AuthenticationRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthenticationLoginComponent },
  { path: 'register', component: AuthenticationRegisterComponent },
]
