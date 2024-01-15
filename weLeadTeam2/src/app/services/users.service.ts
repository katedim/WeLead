import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient);
  private userUrl="../assets/sample-data/user.json";

  

  constructor () { }
  getUsers() {
    return this.http.get(this.userUrl);
  }
  // addUser(user:any){
  //   return this.http.post(this.userUrl, user);
  // }
}
