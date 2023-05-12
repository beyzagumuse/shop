import { Component } from '@angular/core';
import { products } from './product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products = products;
  basket = [
    {
      id : 3,
      name : 'Sek Süt 1L',
      photoPath : 'assets/images/sut.jpg',
      price : 8.2,
      unit : 'Adet',
      quantity : 5
    },
    {
      id : 4,
      name : 'Pastavilla Burgu Makarna 500G',
      photoPath : 'assets/images/makarna.jfif',
      price : 5.25,
      unit : 'Adet',
      quantity : 2
    }
  ];
  
  getTotal() : string {
    let total = 0;
    for(let item of this.basket){
      total += item.price * item.quantity;
    }

    return total.toFixed(2) + ' TL';
  }
}

