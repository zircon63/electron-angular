import {Component} from '@angular/core';

@Component({
  selector: 'app-auth',
  template: `
    <app-auth-layout>
      <app-header></app-header>
      <router-outlet></router-outlet>
    </app-auth-layout>
    `
})

export class AuthComponent {
}
