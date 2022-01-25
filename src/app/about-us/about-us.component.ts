import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DesignutilityService } from '../appServices/designutility.service';
// import { MessagesService } from '../appServices/message.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  ngForm:any='';
  defaultCourse='angular';
  username='';
  submited= false;
  product1='';
  product2='';
  PracticeTitle='';
  formData = {
    username : '',
    email : '',
    course : '',
  };
  productSelected:boolean=false;
  productName:string='';
  cartProduct:any='';
sampleArray:any=[{roll:1,name:'nabamita'},{roll:2,name:'atanu'},{roll:3,name:'dell'}];
  constructor(private _msgService:DesignutilityService) { }

  ngOnInit(): void {

    this.product1 = this._msgService.product1;
    this.product2 = this._msgService.product2;
    this.PracticeTitle = this._msgService.PracticeTitle;

  }

  currentClasses ={
    saveable: true,
    modified: true,
    special:  true
  };
  isvalid:boolean = false;
  selectedProduct:string ='';
  onCreateBlock(){
    this.isvalid = true;
  }

  onClickSubmit(form:NgForm){
    console.log(form)
    // this.submited = true;
    // this.formData.username = this.form.value.username;
    // this.formData.email = this.form.value.email;
    // this.formData.course = this.form.value.course;
  }

  changeProduct(val:any){
    console.log(val.target.value);
    this.selectedProduct = val.target.value;
  }

  // Push and Splice
  users:Array<any>=[];


  onCreateUser(uname:any){
    this.users.push({
      name:uname.value
    })
  };
  removeUser(i:any){
    this.users.splice(i, 1)
  }

  onselectProduct(product:any){
    this.productSelected= true;
    this.productName=product
  }

  onaddProduct(){
    this.cartProduct = this.productName;
  }
  getProductName(e:any){
    this.cartProduct = e;
  }

  // btnClick(){
  //   const msgService = new MessagesService();
  //   msgService.messageAlart()
  // }
  btnClick(){
    this._msgService.messageAlart();
  }
}
