import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricingservices',
  templateUrl: './pricingservices.component.html',
  styleUrls: ['./pricingservices.component.css']
})
export class PricingservicesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public contactUs()
  {
    this.router.navigate(['/home/contact']);
  }
}
