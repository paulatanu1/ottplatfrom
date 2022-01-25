import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPanelRoutingModule } from './login-panel-routing.module';
import { LoginPanelComponent } from './login-panel.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    LoginPanelComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    LoginPanelRoutingModule
  ]
})
export class LoginPanelModule { }
