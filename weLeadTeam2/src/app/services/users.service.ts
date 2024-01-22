import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  http = inject(HttpClient);
  private endpointUrl ="../assets/sample-data/user.json";

  

  //otan to zhthsei to component
  getUsers() {
    return this.http.get(this.endpointUrl);
  }// to balame se mia dikia mas methodo // h methodos kanei return ta dedomena// thn kalw mesa apo ton constructor toy login.ts
 
}
