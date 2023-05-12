import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  orders = [
    {count : 5, cost : 93.18},
    {count : 9, cost : 162},
    {count : 1, cost : 9},
    {count : 55, cost : 934.18}
  ];

}
