import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  @ViewChild('ngOtpInput') ngOtpInputRef:any;

  constructor() { }
  number:any='';
  onOtpChange:string='';
  ngOnInit(): void {
  }

  pushNumber(data:any){
    this.number.push(data);
  }
  
  yourMethod(){
    this.ngOtpInputRef.setValue(5);
    //yourvalue can be any string or number
  }



}
