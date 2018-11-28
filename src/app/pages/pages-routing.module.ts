import {NgModule} from '@angular/core';
import {ExtraOptions, PreloadAllModules, RouterModule, Routes} from '@angular/router';
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
      },
      {
        path: 'room-services',
        loadChildren: './room-services/room-services.module#RoomServicesModule',
      },
      {
        path: 'reservation',
        loadChildren: './reservation/reservation.module#ReservationModule',
      }
    ],
    canActivate: [AuthGuard]
  }
];
const config: ExtraOptions = {
  useHash: true,
  preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}

