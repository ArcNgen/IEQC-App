import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { QcDashboardComponent } from './components/qc-dashboard/qc-dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { QcTestDataService } from "./qc-test-data.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    QcDashboardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [QcTestDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
