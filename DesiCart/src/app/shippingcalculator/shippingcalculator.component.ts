import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShippingCalculator } from './shippingcalculator.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-shippingcalculator',
  templateUrl: './shippingcalculator.component.html',
  styleUrls: ['./shippingcalculator.component.css']
})
export class ShippingcalculatorComponent implements OnInit {
  high: any;
  CountryZones = [];
  selectCountry: boolean = true;
  weightType: string;
  WeightKgs:any;
  length: any;
  width: any
  height: any;
  weightkilo:any;
  wiightcalculated:any;
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
      length: [''],
      width: [''],
      height: [''],
      // weightType: ['' , Validators.required]
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
    if (this.shippingForm.get('ZoneNumber').invalid) {
      alert("Country is required.")
    }
    //  else if(this.shippingForm.get('weightType').invalid) {
    //   alert("Please select Weight Type.")
    //  }
    else if (this.shippingForm.get('WeightKgs').invalid) {
      alert("Weight is required.")
    }
    else {
      this.length = parseInt(this.shippingForm.get('length').value);
      this.width = parseInt(this.shippingForm.get('width').value);
      this.height = parseInt(this.shippingForm.get('height').value);
      // alert(this.length);

      if (this.shippingForm.valid) {

        const countryZone = parseInt(this.shippingForm.get('ZoneNumber').value);
        // const weigth = Math.round(this.shippingForm.get('WeightKgs').value);

        // if(this.shippingForm.get('weightType').value == 'lbs') {
        //    const lbsWeight = this.shippingForm.get('WeightKgs').value;
        //    const weigthKgs = lbsWeight * 0.453592;
        //    var weigth = Math.round(weigthKgs);
        //  }
        //  else if(this.shippingForm.get('weightType').value == 'kgs') {
        //   var weigth = Math.round(this.shippingForm.get('WeightKgs').value);
        //  }
       
        
        if (this.length && this.width && this.height != '') {
          // this.weightkilo = Math.round(this.shippingForm.get('WeightKgs').value);
          this.weightkilo =  Math.ceil((this.shippingForm.get('WeightKgs').value)* 2)/ 2;
          
          this.wiightcalculated = Math.round((this.length * this.height * this.width) / 5000);
          if (this.weightkilo >= this.wiightcalculated) {
            var weigth = this.weightkilo;
          }
          else {
            var weigth = this.wiightcalculated;
          }
        }
        else {
          this.weightkilo =  Math.ceil((this.shippingForm.get('WeightKgs').value)* 2)/ 2;
          var weigth = this.weightkilo;
        }
       
        const newObj = {
          ZoneNumber: countryZone,
          WeightKgs: weigth
        }

        this.shippingService.getShippingPrice(newObj).subscribe((res: any) => {
          if (res.Status == 1) {
            //  alert('Shipping Price is ' + res.ShippingPrice);

            this.selectCountry = !this.selectCountry;
            this.router.navigate(['/home/opend/' + res.ShippingPrice + '/' + weigth]);
            this.shippingForm.reset();
          }
          else if (res.Status == 0) {
            alert(res.Message);
          }
        })
      }
      else {
        alert("Fields are required.")
      }
    }
  }

  public onhome() {
    this.router.navigate(['/home']);
    window.scrollTo(0, 0);
  }
  public pricing() {
    this.router.navigate(['/home/pricing']);
    window.scrollTo(0, 0);
  }
  public knowmore() {
    this.router.navigate(['/home/knowmore']);
  }
  public volumetric() {
    this.router.navigate(['/home/volumetric']);
  }
  public contactUs() {
    this.router.navigate(['/home/contact']);
    window.scrollTo(0, 0);
  }
  public comment() {
    this.router.navigate(['/home/comment']);
    window.scrollTo(0, 0);
  }
  public provibited() {
    this.router.navigate(['/home/prohibited']);
    window.scrollTo(0, 0);
  }
  public terms() {
    this.router.navigate(['/home/terms']);
    window.scrollTo(0, 0);
  }
  public personal() {
    this.router.navigate(['/home/personal']);
    window.scrollTo(0, 0);
  }
  public onamshopping() {
    this.router.navigate(['/home/onamshopping']);
    window.scrollTo(0, 0);
  }
  public tosis() {
    this.router.navigate(['/home/tosis']);
    window.scrollTo(0, 0);
  }
  public payment() {
    this.router.navigate(['/home/payment']);
  }
}
export class DialogContentExampleDialog { }