import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {GuestListComponent} from './guest-list/guest-list.component';
import {GuestsComponent} from './guests.component';

const routes: Routes = [
  {
    path: '',
    component: GuestsComponent,
    children: [
      {
        path: 'list',
        component: GuestListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestsRoutingModule {
}
