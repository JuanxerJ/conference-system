import { Curso } from "../cursos";
import { Mentor } from "../mentors";
import { Student } from "../students";

export class Storage {
  public conferencias: Curso[];
  public mentores: Mentor[];
  public estudiantes: Student[];

  constructor(
    conferencias: Curso[],
    mentores: Mentor[],
    estudiantes: Student[]
  ) {
    this.conferencias = conferencias;
    this.mentores = mentores;
    this.estudiantes = estudiantes;
  }
  public addCurso(cursito: Curso): void {
    this.conferencias.push(cursito);
  }
  public addMentor(mentorsito: Mentor): void {
    this.mentores.push(mentorsito);
  }
  public addStudent(estudiantico: Student): void {
    this.estudiantes.push(estudiantico);
  }
  public findMentor(mentorEmail: string): boolean {
    return Boolean(
      this.mentores.find((mentor) => mentorEmail === mentor.email)
    );
  }
  public findStudent(studentEmail: string): boolean {
    return Boolean(
      this.estudiantes.find((student) => studentEmail === student.email)
    );
  }
}
export const storage = new Storage([], [], []);
