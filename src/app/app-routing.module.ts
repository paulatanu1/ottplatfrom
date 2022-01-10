import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignupComponent } from './login/signup/signup.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

const routes: Routes = [
  { path: 'home', component: MainContentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'PaymentPage', component: PaymentPageComponent },
  { path: 'Payment/:plan/:price/:stream_device/:connect_device', component: PaymentPageComponent },
  { path: 'about-us', component:AboutUsComponent},
  { path: 'reactive', component:ReactiveformComponent},
  { path: 'login/signup', component:SignupComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
