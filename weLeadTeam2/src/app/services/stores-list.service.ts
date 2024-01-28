import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { StoresList } from '../interfaces/stores-list';

@Injectable({
  providedIn: 'root'
})
export class StoresListService {
  private http = inject(HttpClient);

  private endpointUrl = "../assets/sample-data/stores.json";
  private endpointUrlLogo = "../assets/sample-data/most_famous_stores_in_general-logos.json";
  private endpointAllUrls = "../assets/sample-data/most_famous_stores_in_general.json ";


  constructor() { }

  getStoresList() {
    //return this.http.get<StoresList[]>(this.endpointUrl);

    return this.http.get(this.endpointUrl);

  }

  getAllStoresList() {

    return this.http.get(this.endpointAllUrls);

  }

  getStoresLogo() {

    return this.http.get(this.endpointUrlLogo);
  }
}
