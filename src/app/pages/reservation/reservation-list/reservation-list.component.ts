import {Component} from '@angular/core';
import {DataListComponent} from '../../../ui/components/data-list/data-list.component';
import {Reservation} from '../shared/reservation';
import {ReservationService} from '../shared/reservation.service';
import {Status} from '../../rooms/shared/status';
import {switchMap, takeWhile} from 'rxjs/operators';
import {Guest} from '../../guests/shared/guest';
import {Room} from '../../rooms/shared/room';
import {AuthService, Employee} from '../../../auth';
import {MatSnackBar} from '@angular/material';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent extends DataListComponent<Reservation> {
  minDate = new Date();
  statuses: Status[];
  guests: Guest[];
  rooms: Room[];
  employee: Employee;

  constructor(protected reservationService: ReservationService,
              private snackBar: MatSnackBar,
              private authService: AuthService) {
    super(reservationService);
    this.employee = this.authService.currentEmployee;
  }

  loadItems() {
    (<ReservationService>this.service).getData()
      .pipe(
        takeWhile(() => this.isAvile)
      )
      .subscribe((values: [Status[], Guest[], Room[]]) => {
        this.statuses = values[0];
        this.guests = values[1];
        this.rooms = values[2];
      });
    super.loadItems();
  }

  add() {
    if (this.rooms.length > 0) {
      const newItem = this.getInstanceItem(this.emptyItem);
      this.crud.add(newItem);
    } else {
      this.snackBar.open('Not have free rooms!', 'OK');
    }
  }

  getInstanceItem(data: Reservation): Reservation {
    return new Reservation(data);
  }

  onEdit() {
    const item: Reservation = this.crud.editedItem;
    item.date_in = (<Date>item.date_in).getTime();
    item.date_out = (<Date>item.date_out).getTime();
    item.employee_id = this.employee.id;
    this.service.edit(this.crud.editedItem)
      .pipe(
        switchMap(() => {
          const reservationService: ReservationService = (<ReservationService>this.service);
          return forkJoin(reservationService.getAll(), reservationService.getFreeRooms());
        })
      )
      .subscribe((values: [Reservation[], Room[]]) => {
        this.items = values[0];
        this.rooms = values[1];
        this.crud.editedItem = null;
      });
  }

  onCreate() {
    const item: Reservation = this.crud.editedItem;
    item.date_in = (<Date>item.date_in).getTime();
    item.date_out = (<Date>item.date_out).getTime();
    item.employee_id = this.employee.id;
    this.service.create(this.crud.editedItem)
      .pipe(
        switchMap(() => {
          const reservationService: ReservationService = (<ReservationService>this.service);
          return forkJoin(reservationService.getAll(), reservationService.getFreeRooms());
        })
      )
      .subscribe((values: [Reservation[], Room[]]) => {
        this.items = values[0];
        this.rooms = values[1];
        this.crud.editedItem = null;
      });
  }

  remove(item: Reservation) {
    this.service.remove(item).pipe(
      switchMap(() => {
        const reservationService: ReservationService = (<ReservationService>this.service);
        return forkJoin(reservationService.getAll(), reservationService.getFreeRooms());
      })
    )
      .subscribe((values: [Reservation[], Room[]]) => {
        this.items = values[0];
        this.rooms = values[1];
      });
  }

}
