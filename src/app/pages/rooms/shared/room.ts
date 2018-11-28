import {BaseEntity} from '../../shared/base.entity';

export class Room implements BaseEntity {
  id: number;
  number: string;
  price?: number;

  constructor(data: Room) {
    this.id = data.id;
    this.number = data.number;
    this.price = data.price;
  }
}
