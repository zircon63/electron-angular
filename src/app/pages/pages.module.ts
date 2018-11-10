import {NgModule} from '@angular/core';
import {UiModule} from '../ui/ui.module';
import {GuestsModule} from './guests/guests.module';
import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {ReservationModule} from './reservation/reservation.module';
import {RoomServicesModule} from './room-services/room-services.module';
import {ServicesModule} from './services/services.module';

const PAGES_COMPONENTS = [
  PagesComponent
];

@NgModule({
  imports: [
    PagesRoutingModule,
    UiModule,
    ServicesModule,
    GuestsModule,
    ReservationModule,
    RoomServicesModule
  ],
  declarations: [...PAGES_COMPONENTS],
})
export class PagesModule {
}
