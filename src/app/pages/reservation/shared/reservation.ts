import {BaseEntity} from '../../shared/base.entity';

export class Reservation implements BaseEntity {
  id: number;
  date_in: number | Date;
  date_out: number | Date;
  guest_id: number;
  employee_id: number;
  status_id: number;
  room_id: number;

  constructor(data: Reservation) {
    this.id = data.id;
    this.date_in = data.date_in;
    this.date_out = data.date_out;
    this.guest_id = data.guest_id;
    this.employee_id = data.employee_id;
    this.status_id = data.employee_id;
    this.room_id = data.room_id;
  }
}
