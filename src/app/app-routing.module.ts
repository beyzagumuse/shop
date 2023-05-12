// Projeyi oluştururken routing e tamam demediğimiz için manuel olarak ekliyoruz.

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { OrdersComponent } from "./orders/orders.component";

const routes : Routes = [
    {path : '', redirectTo : 'products', pathMatch : 'full'},
    //{sayfanın linki,bu linke gidilince hangi component çalışacak}
    {path : 'products', component : ProductsComponent},
    {path : 'orders', component : OrdersComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}