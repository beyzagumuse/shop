import { Component } from '@angular/core';
import { products } from './product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products = products;
  basket : BasketItem = [];
}

type BasketItem = {
  product : {name : string},
};