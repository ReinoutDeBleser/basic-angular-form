import { Component } from '@angular/core';

import { Friend } from './friend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public languages = ['HTML', 'CSS', 'JS', 'Ruby', 'PHP', 'TypeScript'];
  public friendModel = new Friend();
  public nameValid = /^[a-zA-Z-]+$/g;
  public lastNameValid = /[\w]+/g;
  public phoneValid = /^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
}




