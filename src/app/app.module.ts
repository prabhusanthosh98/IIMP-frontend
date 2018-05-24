import { SearchService } from './shared/search.service';
import { ClientService } from './shared/client.service';
import { APP_ROUTES } from './app.router';
import { FecetFieldComponent } from './fecet-field/fecet-field.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FecetSearchComponent } from './fecet-search/fecet-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './alert/alert.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { ReportComponent } from './report/report.component';
import { AlertDetailComponent } from './alert/alert-detail/alert-detail.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent, FecetFieldComponent, FecetSearchComponent, NavbarComponent, AlertComponent, ReportComponent, AlertDetailComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAq9_Z3d2RhByFfRzwb43kROaUOjvoQof8'
    }),
    NgSelectModule, HttpClientModule, InfiniteScrollModule
  ],
  providers: [ClientService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
