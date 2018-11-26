import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {DatabaseService} from '../../../shared/database.service';
import {CrudOperation} from '../../shared/crud.operation';
import {Service} from './service';

@Injectable({
  providedIn: 'root'
})

export class ServiceService implements CrudOperation<Service> {

  constructor(private db: DatabaseService) {
  }

  create(item: Service): Observable<Service[]> {
    const query = `INSERT INTO services (price,name) VALUES('${item.price}','${item.name}')`;
    return this.db.get(query).pipe(
      switchMap(() => this.getAll())
    );
  }

  edit(item: Service): Observable<Service[]> {
    const query = `UPDATE services SET price= '${item.price}', name='${item.name}' WHERE services.id = ${item.id}`;
    return this.db.get(query).pipe(
      switchMap(() => this.getAll())
    );
  }

  emptyInstace(): Service {
    return {
      id: null,
      price: null,
      name: ''
    };
  }

  getAll(): Observable<Service[]> {
    const query = 'SELECT * FROM services';
    return this.db.all(query)
      .pipe(
        map((values: Service[]) => values.map((value: Service) => new Service(value)))
      );
  }

  remove(item: Service): Observable<Service[]> {
    const query = `DELETE FROM services WHERE services.id = ${item.id}`;
    return this.db.get(query).pipe(
      switchMap(() => this.getAll())
    );
  }


}
