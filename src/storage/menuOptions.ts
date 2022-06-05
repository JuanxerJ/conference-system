import { Menu } from "../Menu";
import { Validations } from "./storageValidations";
import { storage } from "./storage";
import { Mentor } from "../mentors";
import { Student } from "../students";
export class MenuOptions extends Menu {
  constructor() {
    super();
  }
  public static async addMentor(): Promise<void> {
    const name = await super.prototype.getString("Introduce el nombre: ");
    const email = await super.prototype.getString("Introduce el email: ");
    if (!Validations.emailValidation(email))
      return console.log("Por favor ingrese un email válido");

    if (!storage.findMentor(email))
      return console.log("Este email ya está registrado");

    const password = await super.prototype.getString("Ingrese su contraseña: ");
    const mentor = new Mentor(name, email, password);
    storage.addMentor(mentor);
  }

  public static async addstudent(): Promise<void> {
    const name = await super.prototype.getString("Introduce el nombre: ");
    const email = await super.prototype.getString("Introduce el email: ");
    if (!Validations.emailValidation(email))
      return console.log("Por favor ingrese un email válido");

    if (!storage.findStudent(email))
      return console.log("Este email ya está registrado");

    const estudiante = new Student(name, email);
    storage.addStudent(estudiante);
  }
}
