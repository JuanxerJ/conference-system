import { Person } from "./persons";
export class Mentor extends Person {
  public password: string;
  constructor(name: string, email: string, password: string) {
    super(name, email);
    this.password = password;
  }
}
