import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http:HttpClient) { }
  orderNow(model:any){
    return this.http.post("https://dummyjson.com/products/add",model)
  }
}

