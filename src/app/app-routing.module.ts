import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { QcDashboardComponent } from "./components/qc-dashboard/qc-dashboard.component";
import { QcDashboardV2Component } from "./components/qc-dashboard-v2/qc-dashboard-v2.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'dashboard',
    component: QcDashboardComponent
  },
  {
    path: 'dashboardV2',
    component: QcDashboardV2Component
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
