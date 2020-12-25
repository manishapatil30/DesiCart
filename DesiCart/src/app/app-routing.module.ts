import { AuthGuardService } from './auth-guard-services/auth-guard.service';
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
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { HowComponent } from './how/how.component';
import { CommentComponent } from './comment/comment.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { PersonalshopperComponent } from './personalshopper/personalshopper.component';
import { TermsconditionsComponent } from './termsconditions/termsconditions.component';
import { ProhibteditemsComponent } from './prohibteditems/prohibteditems.component';
import { OnamshoppComponent } from './onamshopp/onamshopp.component';
import { TosisComponent } from './tosis/tosis.component';
import { OpendialogComponent } from './opendialog/opendialog.component';
import { KnowmoredialogComponent } from './knowmoredialog/knowmoredialog.component';
import { KnowmorevolemComponent } from './knowmorevolem/knowmorevolem.component';
const routes: Routes = [
  { path: '', redirectTo: '/home/homepage', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, children: [
      { path: '', redirectTo: 'homepage', pathMatch: 'full' },
      {
        path: 'homepage', component: HomepageComponent
      },
      { path: 'headerlink', component: HeaderlinkComponent },
      { path: 'opend/:pr/:wet', component: OpendialogComponent },
      { path: 'knowmore', component: KnowmoredialogComponent },
      { path: 'volumetric', component: KnowmorevolemComponent },
      { path: 'pricing', component: PricingservicesComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'myaccount', canActivate: [AuthGuardService] , component: MyaccountComponent },
      { path: 'comment', component: CommentComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'how', component: HowComponent },
      { path: 'personal', component: PersonalshopperComponent },
      { path: 'terms', component: TermsconditionsComponent },
      { path: 'prohibited', component: ProhibteditemsComponent },
      { path: 'onamshopping', component: OnamshoppComponent },
      { path: 'tosis', component: TosisComponent },
      { path: 'signup', component: SignupComponent },
      {
        path: 'shipping', component: ShippingcalculatorComponent
      },
      {
        path: 'login', children: [
          { path: '', component: LoginComponent },
          { path: 'forgot', component: ForgotpassComponent }
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }
