import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html'
})

export class AuthFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: [],
      password: []
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value);
    }
  }
}
