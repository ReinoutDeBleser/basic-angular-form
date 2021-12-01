export class Friend {
  public fName?: string;
  public lName?: string;
  public email?: string;
  public phone?: number;
  constructor(firstname?: string, lastname?: string , email?: string, phone?: number) {
    this.fName = firstname;
    this.lName = lastname;
    this.email= email;
    this.phone = phone;
  }
}
