import { Component, OnInit, inject } from '@angular/core';
import { StoresListService } from '../../services/stores-list.service';
import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';


@Component({
  selector: 'app-stores-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stores-list.component.html',
  styleUrl: './stores-list.component.css'
})
export class StoresListComponent implements OnInit {


  storesList: any;
  storesLogo: any;
  isclicked = false;

  service = inject(StoresListService);
  construcor(){}
  ngOnInit() { }
  
  getStoresList(){
    this.service.getStoresList().subscribe({
      next: response => this.storesList = response 
    });
    this.service.getStoresLogo().subscribe({
      next: response =>{ this.storesLogo = response; 
         console.log(response) }
    });

    this.isclicked = true;
  }



}


