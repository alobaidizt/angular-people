import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { PeopleComponent }      from './components/people/people.component';
import { PersonDetailComponent }  from './components/personDetail/person-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: PersonDetailComponent
  },
  {
    path: 'people',
    component: PeopleComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
