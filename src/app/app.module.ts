import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainContentComponent } from './main-content/main-content.component';
import { AppRoutingModule} from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NgxSpinnerModule } from "ngx-spinner";
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { MoviesComponent } from './movies/movies.component';
import { ThrillerComponent } from './thriller/thriller.component';
import { RomanceComponent } from './romance/romance.component';
import { ActionComponent } from './action/action.component';
import { ComedyComponent } from './comedy/comedy.component';
import { KidsComponent } from './kids/kids.component';
import { DetactiveComponent } from './detactive/detactive.component';
import { ChildComponent } from './child/child.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DesignutilityService } from './appServices/designutility.service';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { SigninComponent } from './login-panel/signin/signin.component';
import { SignupComponent } from './login-panel/signup/signup.component';
// import { LoginComponent } from './login-panel/login/login.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CountdownModule } from 'ngx-countdown';
import { NgOtpInputModule } from  'ng-otp-input';





@NgModule({
  imports:      [
     BrowserModule,
      NgbModule,
      AppRoutingModule ,
      FormsModule,
      NgxSpinnerModule,
      ReactiveFormsModule, 
      BrowserAnimationsModule,
      CarouselModule,
      MatStepperModule,
      MatTabsModule,
      MatInputModule,
      MatIconModule,
      MatButtonModule,
      CountdownModule,
      NgOtpInputModule
    ],
  declarations: [
     AppComponent,
     HeaderComponent,
     MainContentComponent, 
     FooterComponent, 
     PaymentPageComponent, 
     AboutUsComponent, 
     ReactiveformComponent, 
     WatchlistComponent, 
     MoviesComponent, 
     ThrillerComponent, 
     RomanceComponent, 
     ActionComponent, 
     ComedyComponent, 
     KidsComponent, 
     DetactiveComponent, 
     ChildComponent, 
     LoginPanelComponent, 
     SigninComponent, 
     SignupComponent
    ],
    exports:[
      BrowserAnimationsModule,
      MatStepperModule,
      MatTabsModule,
      MatInputModule,
      MatIconModule,
      MatButtonModule,
      CountdownModule
    ],
  bootstrap:    [ AppComponent ],
  providers:    [DesignutilityService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
