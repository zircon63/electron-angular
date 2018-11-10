import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {UiModule} from '../../ui/ui.module';
import {RoomAddComponent} from './room-add/room-add.component';
import {RoomEditComponent} from './room-edit/room-edit.component';
import {RoomFormComponent} from './room-form/room-form.component';
import {RoomListComponent} from './room-list/room-list.component';
import {RoomsRoutingModule} from './rooms-routing.module';
import {RoomsComponent} from './rooms.component';
import {RoomsService} from './shared/rooms.service';


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
    RoomListComponent,
    RoomFormComponent,
    RoomAddComponent,
    RoomEditComponent
  ],
  providers: [RoomsService],
})
export class RoomsModule {
}
