import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor() { }

  messageAlart(){
    alert("thanks for click this btn.this message coming from dependancy inje. page")
}

product1="Product 1"
product2="Product 2"
PracticeTitle="This is Dependance Injection Practice ==>"
}
