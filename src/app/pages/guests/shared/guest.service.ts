import {Injectable} from '@angular/core';
import {CrudOperation} from '../../shared/crud.operation';
import {Guest} from './guest';
import {Observable} from 'rxjs';
import {DatabaseService} from '../../../shared/database.service';
import {map, switchMap} from 'rxjs/operators';

@Injectable()
export class GuestService implements CrudOperation<Guest> {

  constructor(private db: DatabaseService) {
  }

  create(item: Guest): Observable<Guest[]> {
    const query = `INSERT INTO guest (first_name, last_name) VALUES('${item.first_name}', '${item.last_name}')`;
    return this.db.get(query).pipe(
      switchMap(() => this.getAll())
    );
  }

  edit(item: Guest): Observable<Guest[]> {
    const query = `UPDATE guest SET first_name= '${item.first_name}', last_name = '${item.last_name}' WHERE guest.id = ${item.id}`;
    return this.db.get(query).pipe(
      switchMap(() => this.getAll())
    );
  }

  emptyInstace(): Guest {
    return {
      id: null,
      first_name: '',
      last_name: ''
    };
  }

  getAll(): Observable<Guest[]> {
    const query = 'SELECT * FROM guest';
    return this.db.all(query)
      .pipe(
        map((values: Guest[]) => values.map((value: Guest) => new Guest(value)))
      );
  }

  remove(item: Guest): Observable<Guest[]> {
    const query = `DELETE FROM guest WHERE guest.id = ${item.id}`;
    return this.db.get(query).pipe(
      switchMap(() => this.getAll())
    );
  }
}
