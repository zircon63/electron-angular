export class Employee {
  first_name: string;
  last_name: string;

  constructor(data: Employee) {
    this.first_name = data.first_name;
    this.last_name = data.last_name;
  }

  get fullName(): string {
    return `${this.first_name} ${this.last_name}`;
  }
}
