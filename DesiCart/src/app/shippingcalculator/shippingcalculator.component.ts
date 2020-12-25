import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShippingCalculator } from './shippingcalculator.service';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-shippingcalculator',
  templateUrl: './shippingcalculator.component.html',
  styleUrls: ['./shippingcalculator.component.css']
})
export class ShippingcalculatorComponent implements OnInit {
  high:any;
  CountryZones = [];
  selectCountry: boolean = true;
  weightType: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private shippingService: ShippingCalculator,
    public dialog: MatDialog,
    ) { }

  shippingForm: FormGroup;

  ngOnInit(): void {
    this.shippingForm = this.fb.group({
      ZoneNumber: ['', Validators.required],
      WeightKgs: ['', Validators.required],
      weightType: ['' , Validators.required]
    })

    this.shippingService.getCountryZones().subscribe((res: any) => {
      this.CountryZones = res.CountryZonesms;
      console.log(this.CountryZones);
    })

  }

  onTypeWeigth(type: any) {
    this.weightType = type;
  }

   getShippingRates() {
     if(this.shippingForm.get('ZoneNumber').invalid) {
        alert("Country is required.")
     }
     else if(this.shippingForm.get('weightType').invalid) {
      alert("Please select Weight Type.")
     }
     else if(this.shippingForm.get('WeightKgs').invalid) {
      alert("Weight is required.")
     }
     else {
       if(this.shippingForm.valid) {
         const countryZone = parseInt(this.shippingForm.get('ZoneNumber').value);
        if(this.shippingForm.get('weightType').value == 'lbs') {
           const lbsWeight = this.shippingForm.get('WeightKgs').value;
           const weigthKgs = lbsWeight * 0.453592;
           var weigth = Math.round(weigthKgs);
         }
         else if(this.shippingForm.get('weightType').value == 'kgs') {
          var weigth = Math.round(this.shippingForm.get('WeightKgs').value);
         }
         
         const newObj = {
          ZoneNumber: countryZone,
          WeightKgs: weigth
         }

         this.shippingService.getShippingPrice(newObj).subscribe((res: any) => {
           if(res.Status == 1) {
            //  alert('Shipping Price is ' + res.ShippingPrice);
            
             this.selectCountry = !this.selectCountry;
             this.router.navigate(['/home/opend/'+ res.ShippingPrice + '/' + weigth]);
             this.shippingForm.reset();
           }
           else if(res.Status == 0) {
              alert(res.Message);
           }
         })
       }
       else {
         alert("Fields are required.")
       }
     }
   }


   pricing() {
    this.router.navigate(['/home/pricing']);
    window.scrollTo(0, 0);
  }
  knowmore()
  {
    this.router.navigate(['/home/knowmore']);
  }
  public contactUs()
  {
    this.router.navigate(['/home/contact']);
    window.scrollTo(0, 0);
  }
  public comment()
  {
    this.router.navigate(['/home/comment']);
    window.scrollTo(0, 0);
  }
  public provibited(){
    this.router.navigate(['/home/prohibited']);
    window.scrollTo(0, 0);
  }
  public terms(){
    this.router.navigate(['/home/terms']);
    window.scrollTo(0, 0);
  }
  public personal(){
    this.router.navigate(['/home/personal']);
    window.scrollTo(0, 0);
  }
  public onamshopping(){
    this.router.navigate(['/home/onamshopping']);
    window.scrollTo(0, 0);
  }
  public tosis(){
    this.router.navigate(['/home/tosis']);
    window.scrollTo(0, 0);
  }
}
export class DialogContentExampleDialog {}