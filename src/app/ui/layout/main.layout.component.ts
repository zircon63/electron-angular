import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuService} from '../../shared/menu.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main.layout.component.html'
})

export class MainLayoutComponent implements OnInit, OnDestroy {
  menuVisible: boolean;
  private visible$: Subscription;
  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    this.visible$ = this.menuService.onVisible.subscribe((value) => this.menuVisible = value);
  }

  ngOnDestroy(): void {
    this.visible$.unsubscribe();
  }
}
