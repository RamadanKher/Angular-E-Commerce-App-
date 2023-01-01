import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  host: { class: 'd-block' },
})
export class ProductComponent implements OnInit {
  @Input() data: any = []
  @Output() item = new EventEmitter();
  constructor() { }
  show: boolean=false
  amount: number = 1
  ngOnInit(): void {
  }
  // get single proudct information
  add() {
    this.item.emit({ item:this.data, quantity: this.amount })


  }
 
}
