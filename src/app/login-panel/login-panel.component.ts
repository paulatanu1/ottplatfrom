import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss']
})
export class LoginPanelComponent implements OnInit {
  usernumber: string = '';

  @Output() gettingNo = new EventEmitter();
  mobnumber:string ='';
  constructor() { }
  clickme(e:any) {
    if(e.value.length>0){
      // alert(e.value)
      this.gettingNo.emit(e.value)
    }
    
  };
  getnumber(){
    console.log(this.mobnumber);
  }
  ngOnInit(): void {
  }


}
