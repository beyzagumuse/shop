import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  orders = [
    {count : 5, name: 'Domates', cost : 93.18},
    {count : 9, name: 'Cola', cost : 162},
    {count : 1, name: 'Doma', cost : 9},
    {count : 55, name: 'Domatess', cost : 934.18}
  ];

}
