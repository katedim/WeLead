import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  http = inject(HttpClient);
  private endpointUrl ="../assets/sample-data/stores.json";

  constructor() { }

  GetCategories() {
    return this.http.get<any>(this.endpointUrl);
  }


}
