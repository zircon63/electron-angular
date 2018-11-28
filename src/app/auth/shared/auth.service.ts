import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {EMPTY} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {DatabaseService} from '../../shared/database.service';
import {Employee} from './employee';
import {User} from './user';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class AuthService {
  private employee: Employee;
  private crypto: any;

  constructor(private db: DatabaseService,
              private snackBar: MatSnackBar,
              private router: Router) {
    if (window.require) {
      try {
        this.crypto = window.require('crypto');
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('CRYPTO not loaded');
    }
  }

  get isAuth(): boolean {
    return !!this.employee;
  }

  get currentEmployee(): Employee {
    return this.employee;
  }

  MD5(value: string): string {
    return this.crypto.createHash('md5').update(value).digest('hex');
  }

  logout() {
    this.employee = null;
    this.router.navigate(['/auth/login']);
  }

  login(data: User) {
    const user = new User({
      login: data.login,
      password: this.MD5(data.password + environment.HASH_SALT)
    });
    const query = `SELECT * FROM employee WHERE employee.login = '${user.login}' AND employee.password = '${user.password}'`;
    const login$ = this.db.get<Employee>(query).pipe(
      map(value => {
        if (value) {
          return new Employee(value);
        } else {
          throw new Error('Not found employee!');
        }
      })
    );
    login$.pipe(
      catchError((error: Error) => {
        this.snackBar.open(error.message, 'OK');
        return EMPTY;
      })
    )
      .subscribe((employee: Employee) => {
        this.employee = employee;
        this.router.navigate(['/']);
      });
  }
}
