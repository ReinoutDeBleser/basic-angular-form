import { Component } from '@angular/core';
import { AddFriendService } from "./add-friend.service";
import { Friend } from './friend';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public languages = ['HTML', 'CSS', 'JS', 'Ruby', 'PHP', 'TypeScript'];
  public friendModel = new Friend();
  public nameValid = /^[a-zA-Z-]+$/;
  public lastNameValid = /[\w -]+/gm;
  public phoneValid = /^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
  public submitHelp() {
   const subscription = this.addFriendService.addFriend(this.friendModel);
   return subscription.subscribe( (data) => console.log(data),error => console.log("ERROR"));
  }
  constructor(private addFriendService: AddFriendService) {}
}




