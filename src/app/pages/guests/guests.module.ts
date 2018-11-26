import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {UiModule} from '../../ui/ui.module';
import { GuestListComponent } from './guest-list/guest-list.component';
import {GuestsRoutingModule} from './guests-routing.module';
import {GuestService} from './shared/guest.service';
import {GuestsComponent} from './guests.component';


@NgModule({
  imports: [
    SharedModule,
    UiModule,
    GuestsRoutingModule
  ],
  exports: [],
  declarations: [GuestListComponent, GuestsComponent],
  providers: [GuestService],
})
export class GuestsModule {
}
