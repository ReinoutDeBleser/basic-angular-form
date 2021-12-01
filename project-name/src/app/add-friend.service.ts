import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Friend } from "./friend";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  constructor(private http: HttpClient) {}
  public url="http://localhost:9000/addFriend";
  addFriend(friendModel: Friend) {
    this.http.post(this.url, friendModel)
    return this.http.post(this.url, friendModel);
  }
}
