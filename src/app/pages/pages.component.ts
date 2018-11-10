import {Component} from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
    <app-main-layout>
      <app-header></app-header>
      <app-menu></app-menu>
      <router-outlet></router-outlet>
    </app-main-layout>
  `
})

export class PagesComponent {
}
