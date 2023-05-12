import { Component, OnInit } from '@angular/core';
import { products } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{


  products = products;
  basket : Product[] = [];
  
  getTotal() : number {
    let total = 0;
    for(let item of this.basket){
      total += item.price * item.quantity;
    }

    return total;
  }

  decreaseAmount(product : Product) : void {
    //Ürün miktarı sıfır ise bir şey yapma
    if(product.quantity == 0) {
      return;
    }
    //Ürün miktarını azalt
    product.quantity--;
    //Ürün miktarı sıfır olursa sepetten çıkar
    this.removeIfZero(product);
  }

  increaseAmount(product : Product) : void {
    //Sepette yoksa ekle
    this.addIfNotInBasket(product)
    //Ürün miktarını arttır
    product.quantity++;
  }

  removeIfZero(product:Product) : void {
    if(product.quantity == 0){
      let index = this.basket.indexOf(product);
      this.basket.splice(index, 1);
    }
  }

  addIfNotInBasket(product : Product) : void {
    if(!this.basket.includes(product) && product.quantity > 0){
      this.basket.push(product);
    }
  }

  updateBasket(product : Product) : void {
    //Sepette yoksa ekle
    this.addIfNotInBasket(product)

    //Ürün miktarı sıfır olursa sepetten çıkar
    this.removeIfZero(product);
    
  }

  createOrder() : void {
    let order = {
      count : this.basket.length,
      cost : this.getTotal
    };
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