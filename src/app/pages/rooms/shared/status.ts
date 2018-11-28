import {BaseEntity} from '../../shared/base.entity';

export class Status implements BaseEntity {
  id: number;
  name: string;

  constructor(data: Status) {
    this.id = data.id;
    this.name = data.name;
  }
}
