import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsComponent } from './flights/flights.component';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { LoginComponent } from './login/login.component';
import { PackagesComponent } from './packages/packages.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {path: '',redirectTo:'home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'flights', component: FlightsComponent},
  {path: 'hotels',component: HotelsComponent},
  {path: 'login',component:LoginComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'packages',component:PackagesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
