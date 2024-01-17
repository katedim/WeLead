import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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
  sendTime: any;
  deliveryArr = [{value: 'Delivery'},{value: 'Pick Up'}];
  deliveryOption: any;
  paymentArr = [{value: 'Cash'}, {value: 'Card'}];
  paymentOption: any;
  readyTime: any;
  

  constructor() {}
  
  sendOrder(){
    this.confirm = true;
    this.sendTime = new Date();
    this.readyTime = new Date();
    this.readyTime.setTime(this.sendTime.getTime() + (30 * 60 * 1000));
  }

  onChangeDelivery(event:any){
    this.deliveryOption = event.target.value;
  }

  onChangePayment(event:any){
    this.paymentOption = event.target.value;
  }

  isDeliveryAndPaymentSelected(): boolean {
    return !!this.deliveryOption && !!this.paymentOption;
  }
}
