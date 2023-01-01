import { RouterModule,Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './component/all-products/all-products.component';
import { ProductDetilsComponent } from './component/product-detils/product-detils.component';
import { HttpClientModule } from '@angular/common/http';
  
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './component/product/product.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetilsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbRatingModule,
    SharedModule,
    NgbTooltipModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000, // 15 seconds
      closeButton: true,
      progressBar: true,
    }),
    FormsModule,
    RouterModule,
    NgxGalleryModule 
    

    
  ],
  exports:[
    AllProductsComponent,
    ProductDetilsComponent
  ]
})
export class ProductsModule { }
