import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
