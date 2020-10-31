import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shippingcalculator',
  templateUrl: './shippingcalculator.component.html',
  styleUrls: ['./shippingcalculator.component.css']
})
export class ShippingcalculatorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public contactUs()
  {
    this.router.navigate(['/home/contact']);
  }
  public comment()
  {
    this.router.navigate(['/home/comment']);
  }
}
