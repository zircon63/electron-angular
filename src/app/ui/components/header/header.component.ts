import {Component, OnInit} from '@angular/core';
import {AuthService, Employee} from '../../../auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
  employee: Employee;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.employee = this.authService.currentEmployee;
  }
}
