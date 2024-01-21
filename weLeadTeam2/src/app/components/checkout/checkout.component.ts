import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutToCountdownService } from '../../services/checkout-to-countdown.service';
import { HttpClient } from '@angular/common/http';
import { CountdownComponent } from '../countdown/countdown.component';
import { CountdownService } from '../../services/countdown.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  @Input() messageFromOrder: string | undefined;

  confirm: boolean = false;
  orderTime: any;
  deliveryArr = [{ value: 'Delivery' }, { value: 'Pick Up' }];
  deliveryOption: any;
  paymentArr = [{ value: 'Cash' }, { value: 'Card' }];
  paymentOption: any;
  deliveryTime: any;
  message: any;
  productsInfo: any;
  test1 = [
    {
      "id": 12,
      "orderTime": "2024-02-20T08:43:00.000Z",
      "deliveryTime": "2024-02-20T09:13:00.000Z"
    }
  ]

  // countdownService = inject(CheckoutToCountdownService);

  service = inject(CountdownService);


  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit(){
    console.log('checkout oninit');
    this.service.listenForData().subscribe({
      next: response => {
        console.log(response);
        this.productsInfo = response?.productsInfo;
        console.log(this.productsInfo)
      }
    })
  }

  sendOrder() {
    this.confirm = true;
    this.orderTime = new Date();
    this.deliveryTime = new Date();
    this.deliveryTime.setTime(this.orderTime.getTime() + (30 * 60 * 1000));
     
    this.service.publishData({ id: 48 });

  }

  onChangeDelivery(event: any) {
    this.deliveryOption = event.target.value;
  }

  onChangePayment(event: any) {
    this.paymentOption = event.target.value;
  }

  isDeliveryAndPaymentSelected(): boolean {
    return !!this.deliveryOption && !!this.paymentOption;
  }

  routingCountdown() {
    // this.service.publishData({ any: 'from checkout' });
    let orderInfo = {"orderTime": this.orderTime, "deliveryTime": this.deliveryTime};
    this.service.publishData({ deliveryInfo: orderInfo });

    this.router.navigate(['/countdown']);
  }

  // send1() {
  //   console.log('send1');
  //   this.service.publishData({ date: new Date() });
  // }

  // receive1() {
  //   console.log('receive1');
  //   this.service.listenForData().subscribe({
  //     next: response => {
  //       console.log(response);
  //     }
  //   })
  // }

}