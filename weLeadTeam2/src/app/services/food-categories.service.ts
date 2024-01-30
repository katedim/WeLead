import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map} from 'rxjs';
import { FoodCategories } from '../interfaces/food-categories';
import { StoresList } from '../interfaces/stores-list';

@Injectable({
  providedIn: 'root'
})
export class FoodCategoriesService {

  private http = inject(HttpClient)
  private endpointurl = "../assets/sample-data/stores.json";

  getFoodCategories(): Observable<StoresList[]> {
    return this.http.get<StoresList[]>(this.endpointurl);
  }}

//   getFoodCategories(){
//     return this.http.get<StoresList[]>(this.endpointurl);
//   }
// }


