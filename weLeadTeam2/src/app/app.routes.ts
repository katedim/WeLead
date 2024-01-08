import { Routes } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const routes: Routes = [
    {path: 'order', component: OrderComponent},
    {path: 'order/checkout', component: CheckoutComponent}
    
];
