export class Room {
  id: number;
  number: string;

  constructor(data: Room) {
    this.id = data.id;
    this.number = data.number;
  }
}
