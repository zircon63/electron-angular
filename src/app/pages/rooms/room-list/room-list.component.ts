import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Room} from '../shared/room';
import {RoomsService} from '../shared/rooms.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html'
})

export class RoomListComponent implements OnInit {
  rooms$: Observable<Room[]>;

  constructor(private roomsService: RoomsService) {
  }

  ngOnInit() {
    this.roomsService.getAll();
    this.rooms$ = this.roomsService.rooms;
  }

  remove(room: Room) {
    this.roomsService.remove(room);
  }
}
