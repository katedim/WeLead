import { Component, OnInit, inject } from '@angular/core';
import { StoresListService } from '../../services/stores-list.service';
import { CommonModule } from '@angular/common';
import { RouterLink , RouterLinkActive } from '@angular/router';
import { CategoriesComponent } from "../../categories/categories.component";

@Component({
    selector: 'app-all-stores-list',
    standalone: true,
    templateUrl: './all-stores-list.component.html',
    styleUrl: './all-stores-list.component.css',
    imports: [CommonModule, RouterLink, RouterLinkActive, CategoriesComponent]
})
export class AllStoresListComponent  implements OnInit {

  allStoresList: any;
  storesLogo: any;

  
  service = inject(StoresListService);


  ngOnInit(){

    this.service.getAllStoresList().subscribe({
    next: response => {this.allStoresList = response
    console.log(response); }
    });
    this.service.getStoresLogo().subscribe({
      next: response =>{ this.storesLogo = response; 
         console.log(response) }
    });
    
  }
}
