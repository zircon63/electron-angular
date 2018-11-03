import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NbMenuItem} from '@nebular/theme';
import {MENU_ITEMS} from './menu.items';

@Component({
  selector: 'app-menu',
  template: `
    <nb-menu [items]="items"></nb-menu>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MenuComponent {
  items: NbMenuItem[] = MENU_ITEMS;
}
