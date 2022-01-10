import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  // uname:any='';
  // name:any='';
  // getdetais:any='';
  formData = {
    username : '',
    email : '',
    course : '',
  }
sampleArray:any=[{roll:1,name:'nabamita'},{roll:2,name:'atanu'},{roll:3,name:'dell'}];
  constructor() { }

  ngOnInit(): void {
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

}
