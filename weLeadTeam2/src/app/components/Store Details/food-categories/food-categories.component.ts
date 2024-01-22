import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Pipe, PipeTransform, inject } from '@angular/core';
import { FoodCategoriesService } from '../../../services/food-categories.service';
import { ButtonClickerComponent } from '../button-clicker/button-clicker.component';
import { ButtonClickerCounterComponent } from '../button-clicker-counter/button-clicker-counter.component';
import { SearchComponent } from '../search/search.component';
import { FoodCategories } from '../../../interfaces/food-categories';


@Component({
  selector: 'app-food-categories',
  standalone: true,
  imports: [CommonModule,ButtonClickerComponent,ButtonClickerCounterComponent,SearchComponent],
  templateUrl: './food-categories.component.html',
  styleUrl: './food-categories.component.css',
 
})
export class FoodCategoriesComponent implements OnInit{

// categories: FoodCategories[]=[]
categories:any;
foodCategoriesService: FoodCategoriesService = inject(FoodCategoriesService)

  ngOnInit() {
    this.foodCategoriesService.getFoodCategories().subscribe({
      next: (response) => {
        console.log(response)
        this.categories = response;
      },
    });
  }




}






  

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
