import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  isLinear = true;
  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  public moreSites()
  {
    this.router.navigate(['/home/shop']);
  }
  public comment()
  {
    this.router.navigate(['/home/comment']);
  }
  public contactUs()
  {
    this.router.navigate(['/home/contact']);
  }
 
}
