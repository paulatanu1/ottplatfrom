import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainContentComponent } from './main-content/main-content.component';
import { AppRoutingModule} from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignupComponent } from './login/signup/signup.component';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NgxSpinnerModule } from "ngx-spinner";
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { MoviesComponent } from './movies/movies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThrillerComponent } from './thriller/thriller.component';
import { RomanceComponent } from './romance/romance.component';
import { ActionComponent } from './action/action.component';
import { ComedyComponent } from './comedy/comedy.component';
import { KidsComponent } from './kids/kids.component';
import { DetactiveComponent } from './detactive/detactive.component';


@NgModule({
  imports:      [ BrowserModule, NgbModule,AppRoutingModule ,FormsModule,NgxSpinnerModule,ReactiveFormsModule, BrowserAnimationsModule],
  declarations: [
     AppComponent,
     HeaderComponent,
     MainContentComponent, 
     FooterComponent, 
     PaymentPageComponent, 
     AboutUsComponent, 
     SignupComponent, 
     ReactiveformComponent, 
     WatchlistComponent, 
     MoviesComponent, ThrillerComponent, RomanceComponent, ActionComponent, ComedyComponent, KidsComponent, DetactiveComponent, 
    ],
  bootstrap:    [ AppComponent ],
  providers:    [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
