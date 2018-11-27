import {BaseEntity} from '../../shared/base.entity';

export class RoomService implements BaseEntity {
  id: number;
  room_id: number;
  service_id: number;

  constructor(data: RoomService) {
    if (data) {
      this.id = data.id;
      this.room_id = data.room_id;
      this.service_id = data.service_id;
    }
  }
}
