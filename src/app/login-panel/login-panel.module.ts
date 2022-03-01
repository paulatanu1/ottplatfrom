import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPanelRoutingModule } from './login-panel-routing.module';
import { LoginPanelComponent } from './login-panel.component';
// import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatStepperModule} from '@angular/material/stepper';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    // LoginPanelComponent,
    // LoginComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    LoginPanelRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginPanelModule { }
