import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
@Input() data:any []=[]
@Output() selectdData = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  dettectChange(event:any){
    this.selectdData.emit(event)
  }
}
