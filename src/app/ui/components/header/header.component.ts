import {Component, OnInit} from '@angular/core';
import {AuthService, Employee} from '../../../auth';
import {MenuService} from '../../../shared/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
  employee: Employee;

  constructor(private authService: AuthService,
              private menuService: MenuService) {
  }

  ngOnInit() {
    this.employee = this.authService.currentEmployee;
  }

  show() {
    this.menuService.show();
  }
}
