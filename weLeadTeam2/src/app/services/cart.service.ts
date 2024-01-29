import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../interfaces/cart';
import { FoodCategories } from '../interfaces/food-categories';

@Injectable({ providedIn: 'root'})




export class CartService {

constructor(private http: HttpClient) {}
endpointurl = "../assets/sample-data/stores.json"
items: any [] = [] 


getProducts(): Observable<Cart[]>{
  return this.http.get<Cart[]>(this.endpointurl);
}


// Για να γίνει προσθήκη στο καλάθι
addtoCart(item: Cart) {
  const existingItem = this.items.find(i => i.id === item.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    this.items.push({ ...item, quantity: 1 });
  }
  console.log('Items in Cart:', this.items)
}

// Για να γίνει αφαίρεση από το καλάθι
removeOneFromCart(item: FoodCategories | Cart) {
  const existingItem = this.items.find(i => i.id === item.id);

  if (existingItem) {
    if (existingItem.quantity && existingItem.quantity > 1) {
      existingItem.quantity--;
    } else {
      this.items = this.items.filter(i => i.id !== item.id);
    }
  }
  console.log('Items removed from Cart:', this.items); 
}


// Για να βλέπουμε το σύνολο των προιόντων στο καλάθι
getTotalQuantity(): number {
  return this.items.reduce((total, item) => total + item.quantity, 0);
}

// Για να δείξουμε τι υπάρχει μέσα στο καλάθι σε άλλα components
getCartData(): any[] {
  return this.items.slice(); 
}

}











// addToCart(category: any) {
//   this.items.push({ ...category, quantity: 1 });}


// getItems(){
//   return this.items;
// }


// incrementQuantity(id: number) {
//   let item = this.items.find(i => i.id === id);
//   if (item) {
//     item.quantity++;
//   }
// }

// decrementQuantity(id: number) {
//   let item = this.items.find(i => i.id === id);
//   if (item) {
//     item.quantity--;
//   }
// }

// getTotal(){
//   return this.items.reduce((acc, item) => {
//     return acc + item.price * item.quanitity;
//   },0);
// }


