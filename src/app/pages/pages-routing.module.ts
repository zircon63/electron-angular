import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../auth';
import {PagesComponent} from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'rooms',
        loadChildren: './rooms/rooms.module#RoomsModule',
      },
      {
        path: 'services',
        loadChildren: './services/services.module#ServicesModule',
      },
      {
        path: 'guests',
        loadChildren: './guests/guests.module#GuestsModule',
      }
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}

