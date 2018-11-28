import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReservationComponent} from './reservation.component';
import {ReservationListComponent} from './reservation-list/reservation-list.component';
const routes: Routes = [
  {
    path: '',
    component: ReservationComponent,
    children: [
      {
        path: 'list',
        component: ReservationListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule {
}
