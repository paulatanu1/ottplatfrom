import { Component, Input, OnInit,  Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() productSelected:boolean=false;
  @Input() productName:string='';
  @Output() addcart = new EventEmitter();
   constructor() { }

  ngOnInit(): void {
  }


  onselectProduct(product:any){
    this.productSelected= true;
    this.productName=product
  }

}
