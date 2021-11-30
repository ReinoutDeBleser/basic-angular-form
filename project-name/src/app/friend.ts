export class Friend {
  public firstname: string;
  public lastname: string;
  public email: string;
  public phone: number;
  constructor(firstname= 'firstname', lastname= 'lastname', email= 'name@email.com', phone: number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email= email;
    this.phone = phone;
  }
}
