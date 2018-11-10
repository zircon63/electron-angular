import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {NbToastrService} from '@nebular/theme';
import {empty} from "rxjs";
import {catchError, map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {DatabaseService} from '../../shared/database.service';
import {Employee} from './employee';
import {User} from './user';

@Injectable()
export class AuthService {
  private employee: Employee;
  private crypto: any;

  constructor(private db: DatabaseService,
              private toastrService: NbToastrService,
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
    this.router.navigate(['/auth']);
  }

  login(data: User) {
    const user = new User({
      login: data.login,
      password: this.MD5(data.password + environment.HASH_SALT)
    });
    const query = `SELECT * FROM employee WHERE employee.login = '${user.login}' AND employee.password = '${user.password}'`;

    this.db.get<Employee>(query).pipe(
      catchError((error: Error) => {
        this.toastrService.danger(error);
        return empty();
      }),
      map(value => new Employee(value))
    )
      .subscribe((employee: Employee) => {
        this.employee = employee;
        this.router.navigate(['/']);
      });
  }
}
