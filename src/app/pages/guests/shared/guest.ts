import {BaseEntity} from '../../shared/base.entity';

export class Guest implements BaseEntity {
  id: number;
  first_name: string;
  last_name: string;

  constructor(data: Guest) {
    if (data) {
      this.id = data.id;
      this.first_name = data.first_name;
      this.last_name = data.last_name;
    }
  }
}
