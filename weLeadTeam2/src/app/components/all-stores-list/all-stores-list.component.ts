import { Component, OnInit, inject, } from '@angular/core';
import { StoresListService } from '../../services/stores-list.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-all-stores-list',
  standalone: true,
  templateUrl: './all-stores-list.component.html',
  styleUrl: './all-stores-list.component.css',
  imports: [CommonModule, RouterLink, RouterLinkActive]
})
export class AllStoresListComponent implements OnInit {


  allStoresList: any;
  storesLogo: any;


  service = inject(StoresListService);

  categories = inject(CategoriesService)
  nameCategories: any;
  storesByCategory: any;

  ngOnInit() {

    this.service.getAllStoresList().subscribe({
      next: response => {
        this.allStoresList = response
        this.storesByCategory = this.allStoresList;

        this.storesByCategory = this.storesByCategory.sort((a: { open: any; }, b: { open: any; }) => {
          return a.open === b.open ? 0 : a.open ? -1 : 1;
        });
        console.log(response);
      }
    });
    this.service.getStoresLogo().subscribe({
      next: response => {
        this.storesLogo = response;
        console.log(response)
      }
    });
    this.categories.GetCategories().subscribe({
      next: res => {
        console.log(res);
        this.nameCategories = [...new Set(res.map((store: { category: any; }) => store.category))];
        this.nameCategories.push('ALL');
        console.log(this.nameCategories);
      }
    });
  }

  updateByCategory(category: string) {

    this.storesByCategory = this.allStoresList
      .filter((store: { category: string; }) => store.category === category);

    if (category == 'ALL') {
      this.storesByCategory = this.allStoresList;
    }
  }
}
