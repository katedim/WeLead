import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map} from 'rxjs';
import { FoodCategories } from '../interfaces/food-categories';

@Injectable({
  providedIn: 'root'
})
export class FoodCategoriesService {

  private http = inject(HttpClient)
  private endpointurl = "../assets/sample-data/store.json";

  getFoodCategories(){
    return this.http.get<FoodCategories[]>(this.endpointurl);
  }
}


