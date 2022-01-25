import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AuthGuard } from './services/auth/auth.gard';
import { AppLayoutComponent } from './layout/layout.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
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
    path: 'login',
    loadChildren: () => import('../app/pages/auth/login/login.module').then(m => m.LoginModule),
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
