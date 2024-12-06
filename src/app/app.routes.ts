import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PaisesdetailsComponent } from './pages/paisesdetails/paisesdetails.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'detalles/:PaisName', component: PaisesdetailsComponent}
];
