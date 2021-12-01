import { Component } from '@angular/core';
import { AddFriendService } from "./add-friend.service";
import { Friend } from './friend';
import { OnInit } from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  public languages = ['HTML', 'CSS', 'JS', 'Ruby', 'PHP', 'TypeScript'];
  public friendModel = new Friend();
  public nameValid = /^[a-zA-Z-]+$/;
  public lastNameValid = /[\w -]+/gm;
  public phoneValid = /^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
  public allFriends?: any;

  public submit() {
    console.log(this.friendModel);
    let subscription = this.addFriendService.addFriend(this.friendModel);
    let thefriends = subscription.subscribe( data => this.getUpdate('http://localhost:9000/allFriends'), error => console.log("it didn't work"));
    return this.getUpdate('http://localhost:9000/allFriends');
  }
  constructor(private addFriendService: AddFriendService) {}
  public async getUpdate(url: string): Promise<any> {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    await fetch(url, {method: 'get', headers: myHeaders})
      .then(function(response){
        return response.json();
      })
      .then((json) =>{
        this.allFriends = json;
        console.log('Request successful', json)
      })
      .catch(function(error) {
        console.log('Request failed', error)
      });
  }
  ngOnInit(): any {this.getUpdate('http://localhost:9000/allFriends')};
}




