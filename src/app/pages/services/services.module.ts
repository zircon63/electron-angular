import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {UiModule} from '../../ui/ui.module';
import {ServiceListComponent} from './service-list/service-list.component';
import {ServiceRoutingModule} from './service-routing.module';
import {ServicesComponent} from './services.component';


@NgModule({
  imports: [
    SharedModule,
    UiModule,
    ServiceRoutingModule
  ],
  exports: [],
  declarations: [ServicesComponent, ServiceListComponent],
  providers: [],
})
export class ServicesModule {
}
