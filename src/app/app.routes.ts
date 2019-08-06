import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GraficosComponent } from './pages/graficos/graficos.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';


const appRoutes: Routes = [
    {
      path: '',
      component: PagesComponent,
      children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'graficos', component: GraficosComponent },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
      ]
    },
    { path: 'login', component: LoginComponent },
    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: NopagefoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true} );
