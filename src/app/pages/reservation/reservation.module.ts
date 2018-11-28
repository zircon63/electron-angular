import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {UiModule} from '../../ui/ui.module';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import {ReservationComponent} from './reservation.component';
import {ReservationRoutingModule} from './reservation-routing.module';
import {ReservationService} from './shared/reservation.service';


@NgModule({
  imports: [
    SharedModule,
    UiModule,
    ReservationRoutingModule
  ],
  exports: [],
  declarations: [ReservationListComponent, ReservationComponent],
  providers: [ReservationService],
})
export class ReservationModule {
}
