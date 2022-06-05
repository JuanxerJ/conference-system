import { Person } from "./persons";
export class Student extends Person {
  constructor(name: string, email: string) {
    super(name, email);
  }
}
