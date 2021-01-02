import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PaymentService } from './payment.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cardnumber: any;
  cvcnumber: any;
  exdate: any;
  locknumber: any;
  ammount: any;
  handler: any = null;
  form: FormGroup = new FormGroup({});

  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient, private paymentService: PaymentService,) {

    this.form = fb.group({
      // cardnumber: ['', Validators.required],
      // cvcnumber: ['', Validators.required],
      // exdate: ['', Validators.required],
      locknumber: ['', Validators.required],
      ammount: ['', Validators.required],

    });
  }

  ngOnInit() {

    this.loadStripe();
  }

  pay(amount) {
    var self = this;
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51HtoOfBBFzdG14PeoslQ8nZSUo0q9zt09rtHw1KVm7bNzVAYPbOAboBQ9GSLn3UTLFpq1ZrTvH5yzRGx3R70ZFly00PTsHosdP',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)

        alert('Token Created!!');
        if (token != '') {
          const headers = { 'x-api-key': 'pTBve3DrV2fJfGksPgBt5q0OVwB8Yiu6d5uxRSx2' };
          const body = {
            Amount: amount,
            TokenID: token.id,
            UserLockerNo:self.locknumber
          }
      
          self.http.post(environment.baseURL + '/stripepayment', body, { headers }).subscribe((data => {
            console.log(data);
          }), (error) => {
            console.log(error);
          });
        }
      }


    });

    handler.open({
      name: 'yourDesiCart',
      image: '/assets/Images/Group 23.png',
      description: 'yourDesiCart Payment',
      amount: amount * 100,
      currency: 'INR',
     

    });

  }

  loadStripe() {
    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(s);
    }
    // if(!window.document.getElementById('stripe-script')) {
    //   var s = window.document.createElement("script");
    //   s.id = "stripe-script";
    //   s.type = "text/javascript";
    //   s.src = "https://checkout.stripe.com/checkout.js";
    //   s.onload = () => {
    //     this.handler = (window).StripeCheckout.configure({
    //       key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
    //       locale: 'auto',
    //       token: function (token: any) {

    //         console.log(token)
    //         alert('Payment Success!!');
    //       }
    //     });
    //   }

    //   window.document.body.appendChild(s);
    // }
  }
  public submit() {

  }
  get f() {
    return this.form.controls;
  }
}
