import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderlinkComponent } from './headerlink/headerlink.component';
import { ContantComponent } from './contant/contant.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PricingservicesComponent } from './pricingservices/pricingservices.component';
import { ShippingcalculatorComponent } from './shippingcalculator/shippingcalculator.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, children: [
      { path: '', redirectTo: 'homepage', pathMatch: 'full' },
      { path: 'homepage', component: HomepageComponent },
      { path: 'headerlink', component: HeaderlinkComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'pricing', component: PricingservicesComponent },
      { path: 'shipping', component: ShippingcalculatorComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
