import {BaseEntity} from '../../shared/base.entity';

export class Room implements BaseEntity {
  id: number;
  number: string;

  constructor(data: Room) {
    this.id = data.id;
    this.number = data.number;
  }
}
