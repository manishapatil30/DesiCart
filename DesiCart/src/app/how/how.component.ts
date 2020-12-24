import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-how',
  templateUrl: './how.component.html',
  styleUrls: ['./how.component.css']
})
export class HowComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public contactUs() {
    this.router.navigate(['/home/contact']);
    // this.router.navigate(['/home/tosis']);
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
  public provibited(){
    this.router.navigate(['/home/prohibited']);
    // this.router.navigate(['/home/tosis']);
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
  public terms(){
    this.router.navigate(['/home/terms']);
    // this.router.navigate(['/home/tosis']);
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
  public personal(){
    this.router.navigate(['/home/personal']);
    // this.router.navigate(['/home/tosis']);
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
  public onamshopping(){
    this.router.navigate(['/home/onamshopping']);
    // this.router.navigate(['/home/tosis']);
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
  public tosis(){
    this.router.navigate(['/home/tosis']);
    // this.router.navigate(['/home/tosis']);
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
