import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload');
      location.reload();
    } else {
      localStorage.removeItem('foo');
    }
  }

  public moreSites() {
    this.router.navigate(['/home/shop']);
    window.scrollTo(0, 0);
  }
  public comment() {
    this.router.navigate(['/home/comment']);
    window.scrollTo(0, 0);
  }
  public contactUs() {
    this.router.navigate(['/home/contact']);
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
