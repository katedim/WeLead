import { Component, inject } from '@angular/core';
import { CheckoutToCountdownService } from '../../services/checkout-to-countdown.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css'
})
export class CountdownComponent {
  countdownService = inject(CheckoutToCountdownService);
  data?: any;

  ngOnInit() {
    this.countdownService.getTime().subscribe({
      next: response => {
        console.log(response);
        this.data = response;
      }
    })
  }

}
