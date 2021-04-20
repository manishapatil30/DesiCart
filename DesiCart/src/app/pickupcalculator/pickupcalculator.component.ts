import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pricingService } from '../pricingservices/pricing.service';

@Component({
  selector: 'app-pickupcalculator',
  templateUrl: './pickupcalculator.component.html',
  styleUrls: ['./pickupcalculator.component.css']
})
export class PickupcalculatorComponent implements OnInit {

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


}
