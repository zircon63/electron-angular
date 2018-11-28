import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {UiModule} from '../ui/ui.module';
import {AuthFormComponent} from './form/auth-form.component';
import {AuthGuard} from './shared/auth.guard';
import {AuthService} from './shared/auth.service';
import {AuthComponent} from './auth.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: AuthFormComponent
      }
    ]
  }
];


@NgModule({
  imports: [
    SharedModule,
    UiModule,
    RouterModule.forRoot(routes)
  ],
  exports: [],
  declarations: [AuthFormComponent, AuthComponent],
  providers: [AuthService, AuthGuard]
})
export class AuthModule {
}
