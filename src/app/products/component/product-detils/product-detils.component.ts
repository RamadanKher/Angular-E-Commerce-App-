import { ProductsService } from './../../service/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

ActivatedRoute
@Component({
  selector: 'app-product-detils',
  templateUrl: './product-detils.component.html',
  styleUrls: ['./product-detils.component.scss']
})
export class ProductDetilsComponent implements OnInit {
  id:any
  constructor( private route:ActivatedRoute,private ProductsService:ProductsService,config: NgbRatingConfig) {
  this.id =  this.route.snapshot.paramMap.get("id");
  config.max = 5;
  config.readonly = true;
  }

  data: any =[];
  galleryOptions: any =[];
  galleryImages: any=[] 

  ngOnInit(): void {
    this.GetProductDetils()
    console.log(this.data.images[0])
 
  }
  GetProductDetils(){
   this.ProductsService.GetProductById(this.id).subscribe(res =>{
   this.data=res
   console.log(this.data.images[0])
   
   this.galleryOptions = [
    {
      width: '450px',
      height: '400px',
      thumbnailsColumns: 3,
      previewAnimation: false,
      previewCloseOnClick :true,
      previewCloseOnEsc:true,
      previewAutoPlayInterval:5000,
      previewInfinityMove:true,
      imageInfinityMove:true
    },
    // max-width 800
    {
      breakpoint: 800,
      width: '100%',
      height: '600px',
      imagePercent: 80,
      thumbnailsPercent: 20,
      thumbnailsMargin: 20,
      thumbnailMargin: 20
    },
    // max-width 400
    {
      breakpoint: 400,
      preview: false,
    }
  ];

  this.galleryImages = [
    {
      small: `${this.data.images[0]}`,
      medium: `${this.data.images[0]}`,
      big: `${this.data.images[0]}`
    },
    {
      small: `${this.data.images[1]}`,
      medium: `${this.data.images[1]}`,
      big: `${this.data.images[1]}`
    },
    {
      small: `${this.data.images[2]}`,
      medium: `${this.data.images[2]}`,
      big: `${this.data.images[2]}`
    },{
      small: `${this.data.images[3]}`,
      medium: `${this.data.images[3]}`,
      big: `${this.data.images[3]}`
    }
   
  ];
   })
  }
}
