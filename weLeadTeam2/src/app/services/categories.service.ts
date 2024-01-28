import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  http = inject(HttpClient);
  private endpointUrl ="../assets/sample-data/most_famous_stores_in_general.json";

  constructor() { }

  GetCategories() {
    return this.http.get<any>(this.endpointUrl);
  }


}
