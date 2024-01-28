import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  http = inject(HttpClient);
  private endpointUrl ="../assets/sample-data/user.json";

  
constructor(){}
  //otan to zhthsei to component
  GetUser() {
    return this.http.get<any>(this.endpointUrl);
    // .pipe(map((res:any)=>{
    //   return res
    // }))
    
  }
  // to balame se mia dikia mas methodo // h methodos kanei return ta dedomena// thn kalw mesa apo ton constructor toy login.ts
 
  PostUser(userData :any) {
    
    // JSON.stringify(userData)
    return this.http.post<any>(this.endpointUrl, userData)     
    .pipe(map((res:any)=>{
      return res;
    }))

    
    
  }
  
}

