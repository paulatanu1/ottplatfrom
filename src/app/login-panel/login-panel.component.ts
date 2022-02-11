import { Component, OnInit, } from '@angular/core';
import { userdetails } from '../appServices/userdetails.service';
import { Router } from '@angular/router';
import { CountdownConfig } from 'ngx-countdown';



@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss'],
  providers: [userdetails]
})
export class LoginPanelComponent implements OnInit {
  usernumber: string = '';
  otpmsg:boolean = false;
  userno:any=''
  config: CountdownConfig = {
    leftTime: 5,
    formatDate: ({ date }) => `${date / 1000}`,
  };

  // mobnumber:string ='';
  constructor(private userdetails :userdetails,private router: Router) { }
  
  // getnumber(){
  //   console.log(this.mobnumber);
  // }
  ngOnInit(): void {
    
  }

  onAddmob(){
    this.userdetails.addNumber(this.usernumber);
    this.otpmsg=true;
    // this.usernumber = this.userno
    // console.log(this.usernumber);
    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.router.navigateByUrl('/login-panel/Login');
  }, 5000);

  }


}
