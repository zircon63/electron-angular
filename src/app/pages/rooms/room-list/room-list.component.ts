import {Component} from '@angular/core';
import {NbToastrService} from '@nebular/theme';
import {Room} from '../shared/room';
import {RoomsService} from '../shared/rooms.service';
import {DataListComponent} from '../../../ui/components/data-list/data-list.component';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html'
})

export class RoomListComponent extends DataListComponent<Room> {
  constructor(protected roomsService: RoomsService,
              protected toastrService: NbToastrService) {
    super(roomsService, toastrService);
  }
  getInstanceItem(data: Room): Room {
    return new Room(data);
  }
}
