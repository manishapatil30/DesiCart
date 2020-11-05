import { AccountService } from './myaccount/myaccount.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderlinkComponent } from './headerlink/headerlink.component';
import { ContantComponent } from './contant/contant.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { PricingservicesComponent } from './pricingservices/pricingservices.component';
import { ShippingcalculatorComponent } from './shippingcalculator/shippingcalculator.component';
import { SignupComponent } from './signup/signup.component';
import { FadeComponent } from './fade/fade.component';
import { ContactComponent } from './contact/contact.component';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { NgxPopper } from 'angular-popper';
import {
  GoogleLoginProvider
} from 'angularx-social-login';

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

// const config = new AuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider('149669804064-dr29dh613dr5dmug6k2oj4f9nf3efj5u.apps.googleusercontent.com')
//   }
// ]);

export function provideConfig() {
  const config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('149669804064-dr29dh613dr5dmug6k2oj4f9nf3efj5u.apps.googleusercontent.com')
    }
  ]);
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderlinkComponent,
    ContantComponent,
    HomepageComponent,
    LoginComponent,
    PricingservicesComponent,
    ShippingcalculatorComponent,
    SignupComponent,
    FadeComponent,
    ContactComponent,
    ShopComponent,
    HowComponent,
    CommentComponent,
    ForgotpassComponent,
    MyaccountComponent,
    PersonalshopperComponent,
    TermsconditionsComponent,
    ProhibteditemsComponent,
    OnamshoppComponent,
    TosisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatStepperModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCheckboxModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [HttpClientModule,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
