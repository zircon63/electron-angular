import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoomAddComponent} from './room-add/room-add.component';
import {RoomEditComponent} from './room-edit/room-edit.component';
import {RoomListComponent} from './room-list/room-list.component';
import {RoomsComponent} from './rooms.component';

const routes: Routes = [
  {
    path: '',
    component: RoomsComponent,
    children: [
      {
        path: 'list',
        component: RoomListComponent
      },
      {
        path: 'edit/:id',
        component: RoomEditComponent
      },
      {
        path: 'add',
        component: RoomAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule {
}
