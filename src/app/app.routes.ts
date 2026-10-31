
import { Routes } from '@angular/router';

import { Servers } from './servers/servers';
import { Server } from './server/server';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';
import { Profile } from './profile/profile';
import { Users } from './users/users';
import { Activity } from './users/activity/activity';
import { Settings } from './users/settings/settings';
import { User } from './user/user';

import { EventList } from './event-list/event-list';
import { EventDetails } from './event-details/event-details';
import { EventForm } from './event-form/event-form';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  { path: 'servers', component: Servers },
  { path: 'server', component: Server },
  { path: 'profile', component: Profile, data: { title: 'je suis le composant Profile' } },

  {
    path: 'users',
    component: Users,
    children: [
      { path: 'activity', component: Activity },
      { path: 'settings', component: Settings },
    ],
  },

  { path: 'user/:id/:name', component: User },

  // Routes EventHub
  { path: 'events', component: EventList },
  { path: 'events/add', component: EventForm },
  { path: 'events/:id', component: EventDetails },

  { path: 'contact', loadComponent: () => import('./contact/contact').then(c => c.Contact) },
  { path: 'admin', loadChildren: () => import('./admin/admin.routes').then(a => a.admin_Routes) },

  { path: '**', component: NotFound },
];
