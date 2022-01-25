import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Login',
    urls: [{ title: 'Login', url: '/' }, { title: 'Login' }]
  },
  component: LoginComponent
}];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AmplifyAuthenticatorModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
