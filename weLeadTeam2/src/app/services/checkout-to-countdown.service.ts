import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { retry, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutToCountdownService {

  private http = inject(HttpClient);
  private endpointUrl = "../assets/sample-data/Countdown.json";

  constructor() { }

  getTime() {
    return this.http.get(this.endpointUrl);
  }

  // postTime(data: any) {
  //   return this.http.post(this.endpointUrl, data);
  // }

  // postTime(data: any) {
  //   const options = {
  //     headers: new HttpHeaders({
  //       'Content-type': 'application/json',
  //       'Accept': 'application/json' // Correcting the Accept header
  //     })
  //   };
  
  //   return this.http.post(this.endpointUrl, JSON.stringify(data), options)
  //     .pipe(
  //       retry(1),
  //       catchError(error => throwError(() => `{ message:  ${error.status})}`))
  //     );
  // }

  postTime(time: any) {
    return this.http.post<any>(this.endpointUrl, time)
  }

}