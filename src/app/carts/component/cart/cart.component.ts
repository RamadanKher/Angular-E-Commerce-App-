import { ToastrService } from 'ngx-toastr';
import { CartsService } from './../../carts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productsCart: any = []
  total: number = 0
  constructor(private CartsService: CartsService, private ToastrService: ToastrService) { }

  ngOnInit(): void {
    this.getCartProduct()
    this.getCartTotal()
  }
  getCartProduct() {
    if ("cart" in localStorage) {
      this.productsCart = JSON.parse(localStorage.getItem("cart")!)
    }
    
      
   

  }
  getCartTotal() {
    this.total = 0
    for (let x in this.productsCart)
      this.total += this.productsCart[x].quantity * this.productsCart[x].item.price

  }
  minusamount(index: any) {
    this.productsCart[index].quantity--
    localStorage.setItem("cart", JSON.stringify(this.productsCart))
    this.getCartTotal()
  }
  plusamount(index: any) {
    this.productsCart[index].quantity++
    localStorage.setItem("cart", JSON.stringify(this.productsCart))
    this.getCartTotal()


  }
  detecdChang() {
    localStorage.setItem("cart", JSON.stringify(this.productsCart))
    this.getCartTotal()
  }
  removeItem(index: any) {
    this.productsCart.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(this.productsCart))
    this.getCartTotal()


  }
  clearCart() {
    this.productsCart = []
    localStorage.setItem("cart", JSON.stringify(this.productsCart))
    this.getCartTotal()
  }

  orderCart() {
    let model
    for (let x in this.productsCart) {

      let products = {
        title: this.productsCart[x].item.title,
        quantity: this.productsCart[x].quantity,
        price: this.productsCart[x].item.price

      }
      model = products
      // console.log(model)
    }
    this.CartsService.orderNow(model).subscribe(res => {
      // console.log(res)
      this.ToastrService.success("Well done your order is sucsessfully Send")
    })

  }
}
