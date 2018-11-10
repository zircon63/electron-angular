export class User {
  login: string;
  password: string;

  constructor(data: User) {
    this.login = data.login;
    this.password = data.password;
  }
}
