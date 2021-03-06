import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {UiModule} from '../../ui/ui.module';
import {RoomListComponent} from './room-list/room-list.component';
import {RoomsRoutingModule} from './rooms-routing.module';
import {RoomsComponent} from './rooms.component';


@NgModule({
  imports: [
    SharedModule,
    UiModule,
    RouterModule,
    RoomsRoutingModule
  ],
  exports: [],
  declarations: [
    RoomsComponent,
    RoomListComponent
  ],
  providers: [],
})
export class RoomsModule {
}
