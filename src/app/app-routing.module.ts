import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from 'microsoft-adal-angular6';
import { Error404Component } from './main/errorsPages/404/error-404.component';

const routes: Routes = [
  { 
    path: 'main',
    loadChildren: './main/content/sections/sections.module#SectionsModule',
    canActivate: [AuthenticationGuard]
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
    canActivate: [AuthenticationGuard]
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
