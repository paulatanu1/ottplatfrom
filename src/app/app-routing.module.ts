import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { MoviesComponent } from './movies/movies.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { DetactiveComponent } from './detactive/detactive.component';
import { RomanceComponent } from './romance/romance.component';
import { ActionComponent } from './action/action.component';
import { KidsComponent } from './kids/kids.component';
import { ThrillerComponent } from './thriller/thriller.component';
import { ComedyComponent } from './comedy/comedy.component';
import { LoginPanelComponent } from './login-panel/login-panel.component'

const routes: Routes = [
  { path: 'home', component: MainContentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'PaymentPage', component: PaymentPageComponent },
  { path: 'Payment/:plan/:price/:stream_device/:connect_device', component: PaymentPageComponent },
  { path: 'about-us', component:AboutUsComponent},
  { path: 'reactive', component:ReactiveformComponent},
  { path: 'login-panel', component:LoginPanelComponent},
  {path:'movies', children:[
    {path:'',component:MoviesComponent},
    {path:'watchlist', component:WatchlistComponent},
    {path: 'detactive', component:DetactiveComponent},
    {path: 'romance', component:RomanceComponent},
    {path: 'action', component:ActionComponent},
    {path: 'kids', component:KidsComponent},
    {path: 'thriller', component:ThrillerComponent},
    {path: 'comedy', component:ComedyComponent}
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
