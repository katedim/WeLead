import { Component, inject } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { CommonModule } from '@angular/common';
import { Order } from '../../interfaces/order';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CountdownService } from '../../services/countdown.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  ordersService = inject(OrderService);
  orderData: any;
  hasLoaded = false;
  message = 'test';
  service = inject(CountdownService);

  ngOnInit() {
    this.ordersService.getOrder()
      .subscribe({
        next: response => {
          this.orderData = response;
          this.hasLoaded = true;

        }
      })

  }

  getTotal() {
    let total = 0;
    this.orderData.orders[0].products.forEach(function (value: any) {
     total+=value.price;
    })
    return total;
  }

  checkout() {
    this.service.publishData({ productsInfo: this.orderData.orders[0].products });
  }

}
