import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {UiModule} from '../../ui/ui.module';
import {RoomServiceListComponent} from './room-service-list/room-service-list.component';
import {RoomServicesRoutingModule} from './room-services-routing.module';
import {RoomServicesComponent} from './room-services.component';


@NgModule({
  imports: [
    SharedModule,
    UiModule,
    RoomServicesRoutingModule
  ],
  exports: [],
  declarations: [RoomServiceListComponent, RoomServicesComponent],
  providers: [],
})
export class RoomServicesModule {
}
