import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {UiModule} from '../ui/ui.module';
import {AuthFormComponent} from './form/auth-form.component';
import {AuthGuard} from './shared/auth.guard';
import {AuthService} from './shared/auth.service';


@NgModule({
  imports: [
    SharedModule,
    UiModule
  ],
  exports: [],
  declarations: [AuthFormComponent],
  providers: [AuthService, AuthGuard]
})
export class AuthModule {
}
