import {Injectable} from '@angular/core';
import {NbToastrService} from '@nebular/theme';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {DatabaseService} from '../../../shared/database.service';
import {Room} from './room';

@Injectable()
export class RoomsService {
  private roomsSubject: Subject<Room[]> = new Subject<Room[]>();

  constructor(private db: DatabaseService,
              private toastrService: NbToastrService) {
  }

  get rooms(): Observable<Room[]> {
    return this.roomsSubject.asObservable();
  }

  getAll() {
    const query = 'SELECT * FROM room';
    this.db.all(query)
      .pipe(
        map((values: Room[]) => values.map((value: Room) => new Room(value)))
      ).subscribe((rooms: Room[]) => this.roomsSubject.next(rooms));
  }

  remove(room: Room) {
    const query = `DELETE FROM room WHERE room.id = ${room.id}`;
    this.db.get(query).subscribe(() => {
      this.toastrService.success(`Success remove room: ${room.id}`);
      this.getAll();
    });
  }
}
