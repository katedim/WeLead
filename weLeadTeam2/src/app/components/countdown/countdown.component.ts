import { Component, inject } from '@angular/core';
import { CheckoutToCountdownService } from '../../services/checkout-to-countdown.service';
import { CommonModule } from '@angular/common';
import { CountdownService } from '../../services/countdown.service';

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
  service = inject(CountdownService);

  orderTime: any;
  deliveryTime: any;
  redirectTime: any;

  secondsLeft: number = 0;
  interval: any;

  minutesLeft: number = 0;
  showingMin?: number;

  interval2: any;
  interval3: any;

  differenceInMilliseconds?: number;

  ngOnInit() {

    this.service.listenForData().subscribe({
      next: response => {
        console.log(response);
        this.redirectTime = new Date();
        this.orderTime = response?.deliveryInfo?.orderTime;
        this.deliveryTime = response?.deliveryInfo?.deliveryTime;
      }
    })

    this.differenceInMilliseconds = this.deliveryTime.getTime() - this.redirectTime.getTime();
    this.minutesLeft = Math.floor(this.differenceInMilliseconds / (1000 * 60));
    this.secondsLeft = Math.floor((this.differenceInMilliseconds % (1000 * 60)) / 1000);

    console.log(this.minutesLeft, ":", this.secondsLeft);


    // only for testing!!! remove it later //
    this.minutesLeft =0;
    this.secondsLeft = 5;
    // only for testing end

    // this.showingMin = this.minutesLeft - 1;

    console.log(this.secondsLeft);
    console.log(this.minutesLeft);

    this.interval = setInterval(() => {
      if (this.secondsLeft > 0) {
        this.secondsLeft--;
      } else if (this.minutesLeft > 0) {
        this.secondsLeft = 59;
      }
      else {
        this.secondsLeft = 0;
      }
      if (this.minutesLeft < 0) {
        console.log(71);
        console.log('clear 1');
        clearInterval(this.interval);
      }
    }, 1000)


    this.interval3 = setTimeout(() => {
      console.log(this.minutesLeft, '73');
      this.minutesLeft = this.minutesLeft - 1;
      this.interval2 = setInterval(() => {
        if (this.minutesLeft >= 0) {
          this.minutesLeft--;
          this.showingMin = this.minutesLeft - 1;
        } else {
          this.minutesLeft = -1;
          console.log('clear 2');
          clearInterval(this.interval2);
        }
      }, 60000)
    }, (this.secondsLeft + 1 ) * 1000);
  }


}
