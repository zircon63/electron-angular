import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoomServiceListComponent} from './room-service-list/room-service-list.component';
import {RoomServicesComponent} from './room-services.component';

const routes: Routes = [
  {
    path: '',
    component: RoomServicesComponent,
    children: [
      {
        path: 'list',
        component: RoomServiceListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomServicesRoutingModule {
}
