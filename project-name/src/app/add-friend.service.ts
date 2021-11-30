import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  private http: HttpClient;
  constructor(http: HttpClient ) {
    this.http = http;
  }
  public function addFriend(Friend) {
    
  }
}

