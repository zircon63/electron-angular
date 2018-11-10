import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {UiModule} from '../../ui/ui.module';


@NgModule({
  imports: [
    SharedModule,
    UiModule
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class GuestsModule {
}
