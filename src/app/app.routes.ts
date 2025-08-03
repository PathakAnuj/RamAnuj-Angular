import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Dashbord } from './dashbord/dashbord';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'dashbord', component: Dashbord },
  { path: 'dashbord/widget1', component: Dashbord },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
