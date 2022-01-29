import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { SpinnerModule } from '../../../common/spinner/spinner.module';

import { AuthenticationRoutes } from './authentication.routing.module';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationLoginComponent } from './pages/login/login.component';
import { AuthenticationRegisterComponent } from './pages/register/register.component';
import { AuthenticationCompleteRegistrationComponent } from './pages/complete-registration/complete-registration.component';

@NgModule({
  declarations: [
    AuthenticationComponent,
    AuthenticationLoginComponent,
    AuthenticationRegisterComponent,
    AuthenticationCompleteRegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SpinnerModule,
    AmplifyAuthenticatorModule,
    RouterModule.forChild(AuthenticationRoutes),
  ]
})
export class AuthenticationModule { }
