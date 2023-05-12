// Projeyi oluştururken routing e tamam demediğimiz için manuel olarak ekliyoruz.

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


const routes : Routes = [];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}