export class Friend {
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  constructor(firstname= 'firstname', lastname= 'lastname', email= 'name@email.com', phone: number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email= email;
    this.phone = phone;
  }
}
