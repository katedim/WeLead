import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FoodCategoriesService } from '../../../services/food-categories.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  form!: FormGroup
  foodCategories = inject(FoodCategoriesService)

  ngOnInit(){
    this.setFormValues();

  }

  setFormValues(){
    this.form = new FormGroup({
      searchData: new FormControl("")
    });

  }
onSubmit(){
console;console.log(this.form.get("searchData")?.value);

  }
}

