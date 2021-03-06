import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'progress', component: ProgressComponent},
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
            {path: 'graficas1', component: Graficas1Component}

        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes);
