import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
    <app-main-layout>
      <app-header></app-header>
      <app-menu></app-menu>
      <router-outlet></router-outlet>
      <router-outlet name="section1"></router-outlet>
    </app-main-layout>
  `
})

export class PagesComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
