import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {DatabaseService} from '../../../shared/database.service';
import {Room} from './room';
import {CrudOperation} from '../../shared/crud.operation';

@Injectable({
  providedIn: 'root'
})
export class RoomsService implements CrudOperation<Room> {

  constructor(private db: DatabaseService) {
  }

  getAll(): Observable<Room[]> {
    const query = 'SELECT * FROM room';
    return this.db.all(query)
      .pipe(
        map((values: Room[]) => values.map((value: Room) => new Room(value)))
      );
  }

  create(room: Room) {
    const query = `INSERT INTO room (number) VALUES('${room.number}')`;
    return this.db.get(query).pipe(
      switchMap(() => this.getAll())
    );
  }

  edit(room: Room): Observable<Room[]> {
    const query = `UPDATE room SET number= '${room.number}' WHERE room.id = ${room.id}`;
    return this.db.get(query).pipe(
      switchMap(() => this.getAll())
    );
  }

  remove(room: Room): Observable<Room[]> {
    const query = `DELETE FROM room WHERE room.id = ${room.id}`;
    return this.db.get(query).pipe(
      switchMap(() => this.getAll())
    );
  }

  emptyInstace(): Room {
    return {
      id: null,
      number: '#'
    };
  }
}
