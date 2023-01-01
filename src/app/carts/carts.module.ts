import { FormsModule } from '@angular/forms';
import { RouterModule ,Router} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './component/cart/cart.component';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,RouterModule,FormsModule
  ]
  ,
  exports:[CartComponent]
})
export class CartsModule { }
