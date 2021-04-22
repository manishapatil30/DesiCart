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
Noitems:any;
personalshopper:any;
Weight:any;
pic:any;
post:any;
pppweight:any;
Tailoring:any;
localstrogae:any;
  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient,private pricingservice:pricingService) { }
  pricingform: FormGroup;
  pricingform1: FormGroup;
  ngOnInit(): void {
    this.pricingform = this.fb.group({
      noitems: [''],
      pshopper: [''],
      weight: [''],
      tailoring: [''],
      lstorage: [''],
      // charge: ['', Validators.required],
      // weightType: ['' , Validators.required]
    })

    this.pricingform1 = this.fb.group({
      pickupcode: ['', Validators.required],
      delivercode: [''],
      shippingprice: [''],
      shipiingweight: ['', Validators.required],
      cod: [''],
      length: [''],
      width: [''],
      height: [''],

      // charge: ['', Validators.required],
      // weightType: ['' , Validators.required]
    })
    this.pricingform1.controls.delivercode.setValue("500084");
    // this.pricingform1.controls.cod.setValue(1);
  }
  getpickupcharges() {
    this.pic=Number(this.pricingform1.get('pickupcode').value);
    this.post=Number(this.pricingform1.get('delivercode').value);
    this.pppweight=Number(this.pricingform1.get('shipiingweight').value);
    var body = {
      pickup_postcode: Number(this.pricingform1.get('pickupcode').value),
      delivery_postcode:  Number(this.pricingform1.get('delivercode').value),
      cod:0,
      weight: Number(this.pricingform1.get('shipiingweight').value),
      length: Number(this.pricingform1.get('length').value),
      breadth: Number(this.pricingform1.get('width').value),
      height: Number(this.pricingform1.get('height').value),
      declared_value: Number(this.pricingform1.get('shippingprice').value)
    }
    
    this.pricingservice.pickupcharges(body).subscribe((data: any) => {
      console.log(data);
      var ratedata=data.data.available_courier_companies;
      
      if (data.status === 200) {
        this.router.navigate(['/home/pickup-charges/'+ this.pic + '/'+ this.post + '/'+ this.pppweight]);
        // var result=[];
        // for(let entry of ratedata)
        // {
        //   console.log(entry.rate)
        //   result.push(Math.round(299 + (25*entry.rate/100) + entry.rate));
        // }
        // this.volumetric(ratedata)
      }
      else {
        alert(data.message);
      }
    }, (error) => {
      alert("Error!Please Try Again");
    });
    
  }
  public volumetric(any) {
    // this.router.navigate(['/home/pickup-charges/'+ any]);
    // this.router.navigate(['/home/pickup-charges/'+ pickupcode + '/']);
  }
  getShippingRates() {
    // this.Noitems=Number(this.pricingform.get('noitems').value);
    // this.personalshopper=Number(this.pricingform.get('pshopper').value);
    // this.Weight=parseFloat(this.pricingform.get('weight').value);
    // this.Tailoring=parseFloat(this.pricingform.get('tailoring').value);
    // this.localstrogae=Number(this.pricingform.get('lstorage').value);

    // if(this.Noitems==='' && this.personalshopper==='' && this.Weight==='' && this.Tailoring==='' &&this.localstrogae==='')
    // {
    //   this.Noitems=Number(this.pricingform.get('noitems').value);
    //   this.personalshopper=Number(this.pricingform.get('pshopper').value);
    //   this.Weight=parseFloat(this.pricingform.get('weight').value);
    //   this.Tailoring=parseFloat(this.pricingform.get('tailoring').value);
    //   this.localstrogae=Number(this.pricingform.get('lstorage').value);
    // }
    const headers = { 'x-api-key': 'pTBve3DrV2fJfGksPgBt5q0OVwB8Yiu6d5uxRSx2' };
    var body = {
      NoOfItems: Number(this.pricingform.get('noitems').value),
      ShopperEstimatedTotalCost: Number(this.pricingform.get('pshopper').value),
      WeightInKgs: (this.pricingform.get('weight').value),
      TailoringEstimatedCost: (this.pricingform.get('tailoring').value),
      LockerDays: Number(this.pricingform.get('lstorage').value)
    }
    
    this.pricingservice.savepricingPrice(body).subscribe((data: any) => {
      console.log(data);
      if (data.Status == 1) {
        this.router.navigate(['/home/servicecharge/'+ data.TotalServiceFee]);
        alert("Total service fee=" + "₹"+ data.TotalServiceFee);
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
