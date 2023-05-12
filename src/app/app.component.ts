import { Component } from '@angular/core';
import { products } from './product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products = products;
  product = {
    id : 3,
    name : 'Sek Süt 1L',
    photoPath : 'assets/images/sut.jpg',
    price : 8.2,
    unit : 'Adet',
    quantity : 0
  }
}
