import { Component, inject } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { CommonModule } from '@angular/common';
import { Order } from '../../interfaces/order';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CountdownService } from '../../services/countdown.service';
import { HeaderComponent } from "../header/header.component";
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-order',
    standalone: true,
    templateUrl: './order.component.html',
    styleUrl: './order.component.css',
    imports: [CommonModule, RouterLink, RouterLinkActive, HeaderComponent]
})
export class OrderComponent {
  ordersService = inject(OrderService);
  orderData: any;
  orderData2: any;
  hasLoaded = false;
  message = 'test';
  service = inject(CountdownService);
  cartService = inject(CartService);

  ngOnInit() {
    this.ordersService.getOrder()
      .subscribe({
        next: response => {
          this.orderData = response;
          this.hasLoaded = true;

        }
      })

      this.orderData2 = this.cartService.getCartData();
  }

  getTotal() {
    let total = 0;


    this.orderData2.forEach(function (value: any) {
     total+=value.price * value.quantity;
    })

    this.orderData2.forEach(function (value: any) {
      value.total = value.price * value.quantity;
      value.total = Math.round(value.total * 100) / 100;
    })

    total = Math.round(total * 100) / 100;
    return total;
  }

  checkout() {
    this.service.publishData({ productsInfo: this.orderData2 });
  }

}
