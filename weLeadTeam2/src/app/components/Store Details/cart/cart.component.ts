import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FoodCategoriesComponent } from '../food-categories/food-categories.component';
import { CartService } from '../../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FoodCategoriesComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent  {
  
router = inject(Router)
cartService = inject(CartService)

getTotalQuantity(): number {
  return this.cartService.getTotalQuantity();
}



goToOrder() {
  console.log('goToOrder method called');
  this.router.navigate(['/order']);
}

}















// ngOnInit(): void {
//   this.cartService.getProducts().subscribe(
//     response => {
//       console.log(response);
//       this.addedProduct = response;
//     });}  

// goToOrder() {
//   console.log('goToOrder method called');
//   this.router.navigate(['/order']);
// }





// delete(){
  //   this.addedProduct.splice(this.addedProduct.indexOf(this.item), 1);
  //   this.addedProduct = [...this.addedProduct]
  
  // }

// getTotalQuantity(): any {
// return this.cartService.getItems().reduce((total, item) => total + item.quantity, 0)
// ;
// }

//   this.orderlist = this.cartService.getItems().reduce((total, item) => total + item.quantity, 0)
// console.log (this.orderlist)
// this.testlist = this.cartService.getItems()
// console.log(this.testlist)
// return this.orderlist
