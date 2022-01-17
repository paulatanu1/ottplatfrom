import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
  myReactiveForm=new FormGroup(
    {
      'userDetails':new FormGroup({
        'username':new FormControl('',Validators.required),
        'email':new FormControl('',[Validators.required,Validators.email]),
      }),
     
      'course':new FormControl('',Validators.required),
      'skills':new FormArray([
        new FormControl(null),
        new FormControl(null)
      ])
    }
  )
  constructor() { }

  ngOnInit(): void {
  }
  regForm(){
    console.log(this.myReactiveForm.value)
  }

  get username(){
    return this.myReactiveForm.get('username')
  }

  get email(){
    return this.myReactiveForm.get('email')
  }

  get course(){
    return this.myReactiveForm.get('course')
  }


}
