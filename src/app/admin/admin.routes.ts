import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';

export const admin_Routes : Routes = [
  {path: 'dashboard', loadComponent: () => import('./dashboard/dashboard').then(d => d.Dashboard)},
  {path: 'orders', loadComponent: () =>import('./orders/orders').then(o =>o.Orders)}


]
