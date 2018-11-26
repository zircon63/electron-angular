import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {UiModule} from '../../ui/ui.module';
import { ServicesComponent } from './services.component';
import { ServiceListComponent } from './service-list/service-list.component';
import {ServiceRoutingModule} from './service-routing.module';
import {ServiceService} from './shared/service.service';


@NgModule({
  imports: [
    SharedModule,
    UiModule,
    ServiceRoutingModule
  ],
  exports: [],
  declarations: [ServicesComponent, ServiceListComponent],
  providers: [ServiceService],
})
export class ServicesModule {
}
