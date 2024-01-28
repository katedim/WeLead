import { Component, OnInit, inject } from '@angular/core';
import { StoresListService } from '../../services/stores-list.service';
import { CommonModule } from '@angular/common';
import { RouterLink , RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-all-stores-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './all-stores-list.component.html',
  styleUrl: './all-stores-list.component.css'
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
