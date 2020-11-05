import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';
import $ from 'jquery';

@Component({
  selector: 'app-headerlink',
  templateUrl: './headerlink.component.html',
  styleUrls: ['./headerlink.component.css']
})
export class HeaderlinkComponent implements OnInit {
  x: any;
  popup: any;
  display: any;
  useremail: any;
  username: any;
  constructor(private router: Router, private authService: AuthService) {
    

    $('.topnav .topnav a').on('click', function () {
      if ($('.topnav').hasClass('in')) {
        $('.icon').click();
      }
    });

  }

  ngOnInit(): void {
    // if (!localStorage.getItem('foo')) {
    //   localStorage.setItem('foo', 'no reload');
    //   location.reload();
    // } else {
    //   localStorage.removeItem('foo');
    // }

    this.useremail = localStorage.getItem('username');
    console.log(localStorage.getItem('username'));
    this.useremail = localStorage.getItem('username');
    this.username = localStorage.getItem('name');
    console.log(localStorage.getItem('name'));
    this.display = false;
    

  }

  public myFunction() {
    this.x = document.getElementById('myTopnav');
    if (this.x.className === 'topnav') {
      this.x.className += ' responsive';
    } else {
      this.x.className = 'topnav';
    }
  }

  public onHome() {
    this.router.navigate(['home/homepage']);

    const home = document.querySelector('.home-link');
    const how = document.querySelector('.how-link');
    const pricing = document.querySelector('.pricing-link');
    const shop = document.querySelector('.shop-link');
    const signup = document.querySelector('.signup-link');

    home.classList.add('active-link');
    how.classList.remove('active-link');
    pricing.classList.remove('active-link');
    shop.classList.remove('active-link');
    signup.classList.remove('active-link');

    this.x = document.getElementById('myTopnav');
    if (this.x.className === 'topnav') {
      this.x.className += ' responsive';
    } else {
      this.x.className = 'topnav';
    }
  }

  public onHow() {
    this.router.navigate(['home/how']);

    const home = document.querySelector('.home-link');
    const how = document.querySelector('.how-link');
    const pricing = document.querySelector('.pricing-link');
    const shop = document.querySelector('.shop-link');
    const signup = document.querySelector('.signup-link');

    home.classList.remove('active-link');
    how.classList.add('active-link');
    pricing.classList.remove('active-link');
    shop.classList.remove('active-link');
    signup.classList.remove('active-link');

    this.x = document.getElementById('myTopnav');
    if (this.x.className === 'topnav') {
      this.x.className += ' responsive';
    } else {
      this.x.className = 'topnav';
    }
  }
  public onPricing() {
    this.router.navigate(['home/pricing']);

    const home = document.querySelector('.home-link');
    const how = document.querySelector('.how-link');
    const pricing = document.querySelector('.pricing-link');
    const shop = document.querySelector('.shop-link');
    const signup = document.querySelector('.signup-link');

    home.classList.remove('active-link');
    how.classList.remove('active-link');
    pricing.classList.add('active-link');
    shop.classList.remove('active-link');
    signup.classList.remove('active-link');

    this.x = document.getElementById('myTopnav');
    if (this.x.className === 'topnav') {
      this.x.className += ' responsive';
    } else {
      this.x.className = 'topnav';
    }
  }
  public onShop() {
    this.router.navigate(['home/shop']);

    const home = document.querySelector('.home-link');
    const how = document.querySelector('.how-link');
    const pricing = document.querySelector('.pricing-link');
    const shop = document.querySelector('.shop-link');
    const signup = document.querySelector('.signup-link');

    home.classList.remove('active-link');
    how.classList.remove('active-link');
    pricing.classList.remove('active-link');
    shop.classList.add('active-link');
    signup.classList.remove('active-link');

    this.x = document.getElementById('myTopnav');
    if (this.x.className === 'topnav') {
      this.x.className += ' responsive';
    } else {
      this.x.className = 'topnav';
    }
  }
  public onSign() {
    this.router.navigate(['home/login']);

    const home = document.querySelector('.home-link');
    const how = document.querySelector('.how-link');
    const pricing = document.querySelector('.pricing-link');
    const shop = document.querySelector('.shop-link');
    const signup = document.querySelector('.signup-link');

    home.classList.remove('active-link');
    how.classList.remove('active-link');
    pricing.classList.remove('active-link');
    shop.classList.remove('active-link');
    signup.classList.add('active-link');

    this.x = document.getElementById('myTopnav');
    if (this.x.className === 'topnav') {
      this.x.className += ' responsive';
    } else {
      this.x.className = 'topnav';
    }
  }

  
  public logout() {
    this.authService.signOut();
    this.router.navigate(['/home/homepage']);
    localStorage.clear();
  }
  public myPopupbox() {

    this.popup = document.getElementById('myPopup');
    this.popup.classList.toggle("show");
  }
  public myFunctionaa() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  public signup() {
    this.router.navigate(['/home']);
  }
  public account() {
    this.router.navigate(['/home/myaccount']);
  }
}
