import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pricingService } from './pricing.service';
@Component({
  selector: 'app-pricingservices',
  templateUrl: './pricingservices.component.html',
  styleUrls: ['./pricingservices.component.css']
})
export class PricingservicesComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient,private pricingservice:pricingService) { }
  pricingform: FormGroup;
  ngOnInit(): void {
    this.pricingform = this.fb.group({
      noitems: ['', Validators.required],
      pshopper: ['', Validators.required],
      weight: ['', Validators.required],
      tailoring: ['', Validators.required],
      lstorage: ['', Validators.required],
      charge: ['', Validators.required],
      // weightType: ['' , Validators.required]
    })
  }
  getShippingRates() {
    const headers = { 'x-api-key': 'pTBve3DrV2fJfGksPgBt5q0OVwB8Yiu6d5uxRSx2' };
    var body = {
      NoOfItems: Number(this.pricingform.get('noitems').value),
      ShopperEstimatedTotalCost: Number(this.pricingform.get('pshopper').value),
      WeightInKgs: parseFloat(this.pricingform.get('weight').value),
      TailoringEstimatedCost: parseFloat(this.pricingform.get('tailoring').value),
      LockerDays: Number(this.pricingform.get('lstorage').value)
    }
    
    this.pricingservice.savepricingPrice(body).subscribe((data: any) => {
      console.log(data);
      if (data.Status == 1) {
        alert("Total service fee=" + data.TotalServiceFee);
      }
      else {
        alert("Error! please try again");
      }
    })
    
  }
  public contactUs() {
    this.router.navigate(['/home/contact']);
    const home = document.querySelector('.home-link');
    const how = document.querySelector('.how-link');
    const pricing = document.querySelector('.pricing-link');
    const shop = document.querySelector('.shop-link');
    const signup = document.querySelector('.signup-link');

    home.classList.remove('active-link');
    how.classList.remove('active-link');
    pricing.classList.remove('active-link');
    shop.classList.remove('active-link');
    signup.classList.remove('active-link');
    window.scrollTo(0, 0);
  }
  public provibited() {
    this.router.navigate(['/home/prohibited']);
    const home = document.querySelector('.home-link');
    const how = document.querySelector('.how-link');
    const pricing = document.querySelector('.pricing-link');
    const shop = document.querySelector('.shop-link');
    const signup = document.querySelector('.signup-link');

    home.classList.remove('active-link');
    how.classList.remove('active-link');
    pricing.classList.remove('active-link');
    shop.classList.remove('active-link');
    signup.classList.remove('active-link');
    window.scrollTo(0, 0);
  }
  public terms() {
    this.router.navigate(['/home/terms']);
    const home = document.querySelector('.home-link');
    const how = document.querySelector('.how-link');
    const pricing = document.querySelector('.pricing-link');
    const shop = document.querySelector('.shop-link');
    const signup = document.querySelector('.signup-link');

    home.classList.remove('active-link');
    how.classList.remove('active-link');
    pricing.classList.remove('active-link');
    shop.classList.remove('active-link');
    signup.classList.remove('active-link');
    window.scrollTo(0, 0);
  }
  public personal() {
    this.router.navigate(['/home/personal']);
    const home = document.querySelector('.home-link');
    const how = document.querySelector('.how-link');
    const pricing = document.querySelector('.pricing-link');
    const shop = document.querySelector('.shop-link');
    const signup = document.querySelector('.signup-link');

    home.classList.remove('active-link');
    how.classList.remove('active-link');
    pricing.classList.remove('active-link');
    shop.classList.remove('active-link');
    signup.classList.remove('active-link');
    window.scrollTo(0, 0);
  }
  public onamshopping() {
    this.router.navigate(['/home/onamshopping']);
    const home = document.querySelector('.home-link');
    const how = document.querySelector('.how-link');
    const pricing = document.querySelector('.pricing-link');
    const shop = document.querySelector('.shop-link');
    const signup = document.querySelector('.signup-link');

    home.classList.remove('active-link');
    how.classList.remove('active-link');
    pricing.classList.remove('active-link');
    shop.classList.remove('active-link');
    signup.classList.remove('active-link');
    window.scrollTo(0, 0);
  }
  public tosis() {
    this.router.navigate(['/home/tosis']);
    const home = document.querySelector('.home-link');
    const how = document.querySelector('.how-link');
    const pricing = document.querySelector('.pricing-link');
    const shop = document.querySelector('.shop-link');
    const signup = document.querySelector('.signup-link');

    home.classList.remove('active-link');
    how.classList.remove('active-link');
    pricing.classList.remove('active-link');
    shop.classList.remove('active-link');
    signup.classList.remove('active-link');
    window.scrollTo(0, 0);
  }
}
