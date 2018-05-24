import { AlertDetailComponent } from './alert/alert-detail/alert-detail.component';
import { ReportComponent } from './report/report.component';
import { FecetSearchComponent } from './fecet-search/fecet-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes } from '@angular/router';


export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ReportComponent
    },
    {
        path: 'alert/:uuid',
        component: AlertDetailComponent
    },
    {
        path: 'alerts',
        component: FecetSearchComponent
    }
]
