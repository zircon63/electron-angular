export class Service {
  id: number;
  price: number;
  name: string;

  constructor(data: Service) {
    if (data) {
      this.id = data.id;
      this.price = data.price;
      this.name = data.name;
    }
  }
}
