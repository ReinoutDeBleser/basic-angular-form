import { Component } from '@angular/core';

import { Friend } from './friend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public languages = ['HTML', 'CSS', 'JS', 'Ruby', 'PHP', 'TypeScript'];
  public friendModel = new Friend('','','',0);
}

