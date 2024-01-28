import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  categories = inject(CategoriesService)
  nameCategories = [];
  ngOnInit() {
    this.categories.GetCategories().subscribe({
      next: res => {
        console.log(res);
        this.nameCategories = res.map((store: { category: any; }) => store.category)

      }
    });


  }


}





