import {Component, OnInit, ViewChild} from '@angular/core';
import {NbToastrService} from '@nebular/theme';
import {CrudTableComponent} from '../../../ui/components/crud-table/crud-table.component';
import {Room} from '../shared/room';
import {RoomsService} from '../shared/rooms.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html'
})

export class RoomListComponent implements OnInit {
  @ViewChild('crud') crud: CrudTableComponent;
  rooms: Room[];
  editedRoom: Room;
  isNewRecord: boolean;

  constructor(private roomsService: RoomsService,
              private toastrService: NbToastrService) {
  }

  ngOnInit() {
    this.roomsService.getAll().subscribe(value => this.rooms = value);
  }

  edit(room: Room) {
    this.crud.editedItem = new Room(room);
  }

  add() {
    this.editedRoom = new Room({
      id: null,
      number: 'SimpleNumber'
    });
    this.rooms.push(this.editedRoom);
    this.isNewRecord = true;
  }

  cancel() {
    if (this.crud.isNewRecord) {
      this.rooms.pop();
      this.isNewRecord = false;
    }
    this.editedRoom = null;
  }

  save() {
    if (this.crud.isNewRecord) {
      this.roomsService.create(this.editedRoom).subscribe((rooms: Room[]) => {
        this.toastrService.success(`Success create room`);
        this.rooms = rooms;
        this.isNewRecord = false;
        this.editedRoom = null;
      });
    } else {
      this.roomsService.edit(this.editedRoom).subscribe((rooms: Room[]) => {
        this.toastrService.success(`Success update room: ${this.editedRoom.id}`);
        this.rooms = rooms;
        this.editedRoom = null;
      });
    }
  }

  remove(room: Room) {
    this.roomsService.remove(room).subscribe((rooms: Room[]) => {
      this.toastrService.success(`Success remove room: ${room.id}`);
      this.rooms = rooms;
    });
  }
}
