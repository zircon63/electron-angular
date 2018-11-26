import {Observable} from 'rxjs';

export interface CrudOperation<T> {
  getAll(): Observable<T[]>;

  create(item: T): Observable<T[]>;

  edit(item: T): Observable<T[]>;

  remove(item: T): Observable<T[]>;

  emptyInstace(): T;
}
