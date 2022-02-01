import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './services/auth/auth.gard';

import { AppLayoutComponent } from './layout/layout.component';
import { AuthenticationComponent } from './pages/auth/authentication/authentication.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'processing',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '',
      loadChildren: () => import('../app/layout/layout.module').then(m => m.AppLayoutModule),
    }]
  },
  {
    path: 'authentication',
    component: AuthenticationComponent,
    children: [{
      path: '',
      loadChildren: () => import('../app/pages/auth/authentication/authentication.module').then(m => m.AuthenticationModule),
    }]
  },
  {
    path: '**', redirectTo: '/error/page-not-found', pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false
    })
  ],
  exports: []
})

export class AppRoutingModule { }
