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
    // if (!localStorage.getItem('foo')) {
    //   localStorage.setItem('foo', 'no reload');
    //   location.reload();
    // } else {
    //   localStorage.removeItem('foo');
    // }
  }

  public moreSites()
  {
    this.router.navigate(['/home/shop']);
    window.scrollTo(0, 0);
  }
  public comment()
  {
    this.router.navigate(['/home/comment']);
    window.scrollTo(0, 0);
  }
  public contactUs()
  {
    this.router.navigate(['/home/contact']);
  }
 
}
