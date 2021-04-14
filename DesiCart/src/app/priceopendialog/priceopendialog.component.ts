import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { pricingService } from '../pricingservices/pricing.service'
@Component({
  selector: 'app-priceopendialog',
  templateUrl: './priceopendialog.component.html',
  styleUrls: ['./priceopendialog.component.css']
})
export class PriceopendialogComponent implements OnInit {

  showModal = false;
  weight:any;
  price:any;
  pic:any;
  post:any;
  ratedata:any;
  wweight:any;
  constructor( public dialog: MatDialog,private router: Router,private route: ActivatedRoute,private pricingservice:pricingService) {
    this.showModal = true;
    this.getpickupcharges();
   }

  ngOnInit(): void {
    this.showModal = true;
    this.pic = this.route.snapshot.params.pic;
    this.post = this.route.snapshot.params.post;
    this.wweight = this.route.snapshot.params.weight;
    this.getpickupcharges();
  }
  onClose() {
    this.showModal = false;
    //Allow fade out animation to play before navigating back
    setTimeout(
      () => this.router.navigate(['home/pricing']),
      100
    );
  }

  onDialogClick(event: UIEvent) {
    // Capture click on dialog and prevent it from bubbling to the modal background.
    event.stopPropagation();
    event.cancelBubble = true;
  }
  openDialog() {
    const dialogRef = this.dialog.open(PriceopendialogComponent,{
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  getpickupcharges() {
    var body = {
      pickup_postcode: this.route.snapshot.params.pic,
      delivery_postcode:  this.route.snapshot.params.post,
      cod:0,
      weight: this.route.snapshot.params.weight,
    }
    
    this.pricingservice.pickupcharges(body).subscribe((data: any) => {
      console.log(data);
      this.ratedata=data.data.available_courier_companies;
      
      if (data.status === 200) {
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
