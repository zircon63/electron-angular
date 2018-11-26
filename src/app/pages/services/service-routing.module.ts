import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ServicesComponent} from './services.component';
import {ServiceListComponent} from './service-list/service-list.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    children: [
      {
        path: 'list',
        component: ServiceListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule {
}
