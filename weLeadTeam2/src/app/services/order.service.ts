import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private http = inject(HttpClient);
  // private endpointUrl = 'http://localhost:3000/orders';
  private endpointUrl = "../assets/sample-data/Order.json";

  constructor() { }

  getOrder() {
    return this.http.get<Order[]>(this.endpointUrl);
    // return this.http.get(this.endpointUrl);
  }
}
