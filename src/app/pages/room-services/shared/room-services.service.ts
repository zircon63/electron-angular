import {Injectable} from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {DatabaseService} from '../../../shared/database.service';
import {RoomsService} from '../../rooms/shared/rooms.service';
import {ServiceService} from '../../services/shared/service.service';
import {CrudOperation} from '../../shared/crud.operation';
import {RoomService} from './room-service';

@Injectable({
  providedIn: 'root'
})
export class RoomServicesService implements CrudOperation<RoomService> {

  constructor(private roomsService: RoomsService,
              private serviceService: ServiceService,
              private db: DatabaseService) {
  }

  getRoomsAndServices() {
    return forkJoin(this.roomsService.getAll(), this.serviceService.getAll());
  }

  create(item: RoomService): Observable<RoomService[]> {
    const query = `INSERT INTO room_services (room_id,service_id) VALUES('${item.room_id}','${item.service_id}')`;
    return this.db.get(query).pipe(
      switchMap(() => this.getAll())
    );
  }

  edit(item: RoomService): Observable<RoomService[]> {
    const query = `UPDATE room_services SET room_id= '${item.room_id}', service_id='${item.service_id}' WHERE room_services.id = ${item.id}`;
    return this.db.get(query).pipe(
      switchMap(() => this.getAll())
    );
  }

  emptyInstace(): RoomService {
    return {
      id: null,
      room_id: null,
      service_id: null
    };
  }

  getAll(): Observable<RoomService[]> {
    const query = 'SELECT * FROM room_services';
    return this.db.all(query)
      .pipe(
        map((values: RoomService[]) => values.map((value: RoomService) => new RoomService(value)))
      );
  }

  remove(item: RoomService): Observable<RoomService[]> {
    const query = `DELETE FROM room_services WHERE room_services.id = ${item.id}`;
    return this.db.get(query).pipe(
      switchMap(() => this.getAll())
    );
  }
}
