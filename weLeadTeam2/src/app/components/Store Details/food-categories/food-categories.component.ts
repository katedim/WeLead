import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnInit, Output, Pipe, PipeTransform, inject } from '@angular/core';
import { FoodCategoriesService } from '../../../services/food-categories.service';
import { SearchComponent } from '../search/search.component';
import { FoodCategories } from '../../../interfaces/food-categories';
import { map } from 'rxjs';
import { CartService } from '../../../services/cart.service';
import { CartComponent } from '../cart/cart.component';
import { ProductFilterService } from '../../../services/product-filter.service';
import { Router } from '@angular/router';
import { StoresListService } from '../../../services/stores-list.service';
import { StoresList } from '../../../interfaces/stores-list';


@Component({
  selector: 'app-food-categories',
  standalone: true,
  imports: [CommonModule,SearchComponent,CartComponent],
  templateUrl: './food-categories.component.html',
  styleUrl: './food-categories.component.css',
 
})
export class FoodCategoriesComponent implements OnInit{
[x: string]: any;


@Output() cartData: EventEmitter<any> = new EventEmitter();

categories: StoresList[] = []
filteredCategories: StoresList[] = [];
addedProduct: any[] = [];
FilteredProduct: any[] =[];

foodCategoriesService: FoodCategoriesService = inject(FoodCategoriesService)
cartService: CartService = inject(CartService) 
filterService: ProductFilterService = inject(ProductFilterService)
storeListservice = inject(StoresListService);
selectedStore: any;
allStores: any;



ngOnInit() {
this.storeListservice.listenForData().subscribe({
  next: response => {
    this.selectedStore = response;
  }
})
this.loadFoodCategories();
}


loadFoodCategories() {
  this.foodCategoriesService.getFoodCategories().subscribe(
    {
      next: response => {
        this.allStores = response;
        console.log(this.selectedStore);
        console.log((this.selectedStore?.categoryName));

        this.addedProduct = [].concat(...this.allStores
          .filter((store: { name: any; }) => store.name === this.selectedStore.categoryName)
          .map((store: { products: any[] }) => store.products));

        console.log(this.addedProduct);

        this.addedProduct.forEach(item => {
          item.subscribe();
        });
      }
    }
  );
}



addToCart(category: FoodCategories) {
  category.quantity = (category.quantity || 0) + 1;
  this.cartService.addtoCart(category);
  this.cartData.emit(this.cartService.getCartData());
}

removeFromCart(category: FoodCategories) {
  if (category.quantity && category.quantity > 0) {
    category.quantity--;
    this.cartService.removeOneFromCart(category);
  }
}

}













// goToOrder() {
//   console.log('goToOrder method called');
//   this.router.navigate(['/order']);
// }

    //   addToCart(categories: any){
    //     this.cartService.addToCart(categories);
    //   }      

    //   removeFromCart(categories: any) {
    //     this.cartService.deleteFromCart(categories);

    // }

    // reducefromcart(categories: any){
    //   this.cartService.decrementQuantity(categories);
    // }


  

























    //   )subscribe({
    //   next: (response) => {
    //     console.log(response)
    //     this.categories = response;
    //   },
    // });
  

  // ngOnInit() {
  //   this.FoodCategoriesService.getFoodCategories().subscribe({
  //     next: (response) => {
  //       console.log(response);
  //       this.categories = response;
  //     },
  //   });
  // }}
  
// @Pipe({name:'group'})

// export class GroupPipe implements PipeTransform {

// constructor(private foodCategoriesService: FoodCategoriesService ){}

//   transform(array: any, key: string): any {
// console.log('executeing for key:', key);

// return from(array).pipe(
//   groupBy((elem: any) => elem[key]),
//   tap((response: any) => console.log (response)),
//   mergeMap((group) => group.pipe(toArray())),
//   tap((response: any) => console.log(response)),
//   toArray(),
//   tap((response: any) => console.log(response))
// );
//   }
// }

// this.uniqueCategories = Array.from(new Set(this.categories.products.map((product: { category: any }) => product.category)));
// this.uniquePrice = Array.from(new Set(this.categories.products.map((product: { name: any, price:any }) => product.name)));

//   showGroup() {
//   const group = this.categories.reduce((acc: any[], curr: { category: any }) => {
//     let key = curr.category;
//     const existingCategory = acc.find(c => c.category === key);

//     if (existingCategory) {
//       existingCategory.products = existingCategory.products.concat(curr.products);
//     } else {
//       acc.push({
//         category: key,
//         products: [...curr.products],
//       });
//     }
//     return acc;
//   }, []);

//   this.categories = group;
// }

// filterBy(nameInput: HTMLInputElement) {
//   if (nameInput.value) {
//     // Filter the products array within each category
//     this.categories.forEach((category: { products: any[]; }) => {
//       category.products = category.products.filter((p: { name: string }) => p.name === nameInput.value);
//     });
//   }
// }
