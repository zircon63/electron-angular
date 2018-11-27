import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Room} from '../../rooms/shared/room';
import {Service} from '../../services/shared/service';
import {RoomServicesService} from '../shared/room-services.service';

@Component({
  selector: 'app-room-service-list',
  templateUrl: './room-service-list.component.html',
  styleUrls: ['./room-service-list.component.scss']
})
export class RoomServiceListComponent implements OnInit {
  rooms: Room[];
  services: Service[];
  form: FormGroup;
  selected_room: number;
  selected_services: number[];

  constructor(private roomServices: RoomServicesService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.roomServices.getRoomsAndServices().subscribe((values: [Room[], Service[]]) => {
      this.rooms = values[0];
      this.services = values[1];
    });
    this.form = this.fb.group({
      room: [],
      services: []
    });
  }

}
