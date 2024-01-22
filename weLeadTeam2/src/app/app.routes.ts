import { Routes } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FoodCategoriesComponent } from './components/Store Details/food-categories/food-categories.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { StoresListComponent } from './components/stores-list/stores-list.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
  { path: 'order', component: OrderComponent },
  { path: 'order/checkout', component: CheckoutComponent },
  { path: 'food-categories', component: FoodCategoriesComponent },
  { path: 'countdown', component: CountdownComponent },
  { path: 'stores-list', component: StoresListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];
