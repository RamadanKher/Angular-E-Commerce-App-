import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http:HttpClient ) { }
  private user = new BehaviorSubject<any>([]);
  castUser = this.user.asObservable();
  

  getAllProudacts( ){
    return this.http.get("https://dummyjson.com/products?limit=28")
  }
  getAllCategories( ){
    return this.http.get("https://dummyjson.com/products/categories")
  }
  getProductByCategories( keword:any){
    return this.http.get("https://dummyjson.com/products/category/"+keword)
  }
  SerchProducts( keword:any){
    return this.http.get("https://dummyjson.com/products/search?q="+keword)
  }
  limtProducts( keword:any,skip:any){
    return this.http.get("https://dummyjson.com/products?limit="+keword+"&skip="+skip)
  }
  GetProductById( id:any){
    return this.http.get("https://dummyjson.com/products/"+id)
  }
}
