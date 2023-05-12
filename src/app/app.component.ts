import { Component } from '@angular/core';
import { products } from './product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products = products;
  basket : Product[] = [];
  
  getTotal() : string {
    let total = 0;
    for(let item of this.basket){
      total += item.price * item.quantity;
    }

    return total.toFixed(2) + ' TL';
  }

  decreaseAmount(product : Product) : void {
    //Ürün miktarı sıfır ise bir şey yapma
    if(product.quantity = 0) {
      return;
    }
    //Ürün miktarını azalt
    product.quantity--;
    //Ürün miktarı sıfır olursa sepetten çıkar
    if(product.quantity == 0){
      let index = this.basket.indexOf(product)
      this.basket.splice(index, 1);
    }
  }

  increaseAmount(product : Product) : void {
    //Sepette yoksa ekle
    if(!this.basket.includes(product)){
      this.basket.push(product);
    }
    //Ürün miktarını arttır
    product.quantity++;
  }
}


type Product = {
  id : number,
  name : string,
  photoPath : string,
  price : number,
  unit : string,
  quantity : number
};
