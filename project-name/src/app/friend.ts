export class Friend {
  public firstname?: string;
  public lastname?: string;
  public email?: string;
  public phone?: number;
  constructor(firstname?: string, lastname?: string , email?: string, phone?: number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email= email;
    this.phone = phone;
  }
}
