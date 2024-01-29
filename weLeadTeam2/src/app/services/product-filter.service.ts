import { Injectable } from '@angular/core';
import { FoodCategories } from '../interfaces/food-categories';

@Injectable({
  providedIn: 'root'
})
export class ProductFilterService {

  filterProducts(products: FoodCategories[], query: string): FoodCategories[] {

    
    if (!query) {
      return products; 
    }
    

    query = query.toLowerCase();

    return products.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  }

}