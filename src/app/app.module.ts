import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { CartsModule } from './carts/carts.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router, RouterModule } from '@angular/router'; // CLI imports 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartsModule,
    SharedModule,
    ProductsModule,
    RouterModule,
    
    
  
    

  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
