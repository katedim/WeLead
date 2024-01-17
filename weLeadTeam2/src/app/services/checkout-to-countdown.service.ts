import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

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

  postTime(data: any) {
    return this.http.post(this.endpointUrl, data);
  }
}
