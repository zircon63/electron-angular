import {Injectable} from '@angular/core';
import {CrudOperation} from '../../shared/crud.operation';
import {Reservation} from './reservation';
import {forkJoin, Observable} from 'rxjs';
import {DatabaseService} from '../../../shared/database.service';
import {Status} from '../../rooms/shared/status';
import {GuestService} from '../../guests/shared/guest.service';
import {Guest} from '../../guests/shared/guest';
import {Room} from '../../rooms/shared/room';
import {RoomsService} from '../../rooms/shared/rooms.service';
import {switchMap, map} from 'rxjs/operators';


@Injectable()
export class ReservationService implements CrudOperation<Reservation> {

  constructor(private db: DatabaseService,
              private guestService: GuestService,
              private roomsService: RoomsService) {
  }

  create(item: Reservation): Observable<Reservation[]> {
    const query = `INSERT INTO reservation (date_in,date_out,guest_id,employee_id,status_id,room_id)
     VALUES('${item.date_in}','${item.date_out}','${item.guest_id}','${item.employee_id}','${item.status_id}','${item.room_id}')`;
    return this.db.get(query);
  }

  edit(item: Reservation): Observable<Reservation[]> {
    const query = `UPDATE reservation SET date_in='${item.date_in}',date_out='${item.date_out}',guest_id='${item.guest_id}'
    ,employee_id='${item.employee_id}',status_id='${item.status_id}',room_id='${item.room_id}'
    WHERE reservation.id = ${item.id}`;
    return this.db.get(query);
  }

  emptyInstace(): Reservation {
    return new Reservation({
      id: null,
      date_in: null,
      date_out: null,
      employee_id: null,
      guest_id: null,
      room_id: null,
      status_id: null
    });
  }

  getAll(): Observable<Reservation[]> {
    const query = 'SELECT * FROM reservation';
    return this.db.all(query)
      .pipe(
        map((values: Reservation[]) => values.map((value: Reservation) => {
          value.date_in = new Date(value.date_in);
          value.date_out = new Date(value.date_out);
          return new Reservation(value);
        }))
      );
  }

  remove(item: Reservation): Observable<Reservation[]> {
    const query = `DELETE FROM reservation WHERE reservation.id = ${item.id}`;
    return this.db.get(query).pipe(
      switchMap(() => this.getAll())
    );
  }

  getListStatus(): Observable<Status[]> {
    const query = `SELECT * FROM reservation_status`;
    return this.db.all(query)
      .pipe(
        map((values: Status[]) => values.map((value: Status) => new Status(value)))
      );
  }

  getFreeRooms() {
    return this.roomsService.getFree();
  }

  getData(): Observable<[Status[], Guest[], Room[]]> {
    return forkJoin(this.getListStatus(), this.guestService.getAll(), this.getFreeRooms());
  }


}
