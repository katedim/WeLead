import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
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
  @Output() search = new EventEmitter<string>();

 onInputChange(event: Event) {
  const inputValue = (event.target as HTMLInputElement).value;
  console.log('Input Value:', inputValue);
  this.search.emit(inputValue);
}
}

