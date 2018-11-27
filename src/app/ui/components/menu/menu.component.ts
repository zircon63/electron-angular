import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MENU_ITEMS} from './menu.items';

@Component({
  selector: 'app-menu',
  template: `
    <div class="menu">
      <button mat-button *ngFor="let item of items" [routerLink]="[item.link]">{{item.title}}</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MenuComponent {
  items = MENU_ITEMS;
}
