import { CartComponent } from './carts/component/cart/cart.component';
import { ProductDetilsComponent } from './products/component/product-detils/product-detils.component';
import { AllProductsComponent } from './products/component/all-products/all-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [

  {path: 'AllProducts', component: AllProductsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'detils/:id', component: ProductDetilsComponent},
  {path: '', redirectTo: '/AllProducts', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
