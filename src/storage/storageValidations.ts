export class Validations {
  public static emailValidation(email: string): boolean {
    const emailRegrex =
      /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegrex.test(email);
  }
  public static datelValidation(date: string): boolean {
    const dateRegrex =
      /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/i;
    return dateRegrex.test(date);
  }
}
