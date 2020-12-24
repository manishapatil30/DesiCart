import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';
// import $ from 'jquery';
import { LoginService } from '../login/login.service';
import { AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
  UserID

  Auth
  constructor(private router: Router, 
    private authService: AuthService, 
    private loginService: LoginService,
    private http: HttpClient) {
    

    // $('.topnav .topnav a').on('click', function () {
    //   if ($('.topnav').hasClass('in')) {
    //     $('.icon').click();
    //   }
    // });

  }

 
    // console.log(localStorage.getItem('username'));
  // useremail = localStorage.getItem('username');
  //   this.username = localStorage.getItem('name');
    // console.log(localStorage.getItem('name'));

  ngOnInit(): void {
    // if (!localStorage.getItem('foo')) {
    //   localStorage.setItem('foo', 'no reload');
    //   location.reload();
    // } else {
    //   localStorage.removeItem('foo');
    // }

    // this.useremail = localStorage.getItem('username');
    // console.log(localStorage.getItem('username'));
    // this.useremail = localStorage.getItem('username');
    // this.username = localStorage.getItem('name');
    // console.log(localStorage.getItem('name'));
    this.display = false;
    this.UserID = localStorage.getItem('usersid');

    if(this.UserID) {
      const headers = { 'x-api-key': 'pTBve3DrV2fJfGksPgBt5q0OVwB8Yiu6d5uxRSx2' };
    this.http.get<any>('https://aban7ul865.execute-api.ap-south-1.amazonaws.com/dev/users?UserID=' + this.UserID, { headers }).subscribe(data => {
      console.log("Header Data")
      this.useremail = data.Users.Name
    })
    }

     this.Auth = JSON.parse(localStorage.getItem("LoggedIn"));
    if(this.Auth == true) {
      this.useremail = localStorage.getItem('username');
    } else if (this.Auth == false) {
    }
    
    

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
    console.log("Hello Home")
    // this.router.navigate(['home/homepage']);

    // this.myFunction();

    const home = document.querySelector('.navbar-collapse');
    home.classList.remove("show")
    // const how = document.querySelector('.how-link');
    // const pricing = document.querySelector('.pricing-link');
    // const shop = document.querySelector('.shop-link');
    // const signup = document.querySelector('.signup-link');

    // home.classList.add('active-link');
    // how.classList.remove('active-link');
    // pricing.classList.remove('active-link');
    // shop.classList.remove('active-link');
    // signup.classList.remove('active-link');
  }

  public onHow() {
    const home = document.querySelector('.navbar-collapse');
    home.classList.remove("show")
    // this.router.navigate(['home/how']);

    // this.myFunction();

    // const home = document.querySelector('.home-link');
    // const how = document.querySelector('.how-link');
    // const pricing = document.querySelector('.pricing-link');
    // const shop = document.querySelector('.shop-link');
    // const signup = document.querySelector('.signup-link');

    // home.classList.remove('active-link');
    // how.classList.add('active-link');
    // pricing.classList.remove('active-link');
    // shop.classList.remove('active-link');
    // signup.classList.remove('active-link');
  }
  public onPricing() {
    const home = document.querySelector('.navbar-collapse');
    home.classList.remove("show")
    // this.router.navigate(['home/pricing']);

    // this.myFunction();

    // const home = document.querySelector('.home-link');
    // const how = document.querySelector('.how-link');
    // const pricing = document.querySelector('.pricing-link');
    // const shop = document.querySelector('.shop-link');
    // const signup = document.querySelector('.signup-link');

    // home.classList.remove('active-link');
    // how.classList.remove('active-link');
    // pricing.classList.add('active-link');
    // shop.classList.remove('active-link');
    // signup.classList.remove('active-link');
  }

  onShipping() {
    const home = document.querySelector('.navbar-collapse');
    home.classList.remove("show") 
  }


  public onShop() {
    const home = document.querySelector('.navbar-collapse');
    home.classList.remove("show")
    // this.router.navigate(['home/shop']);

    // this.myFunction();

    // const home = document.querySelector('.home-link');
    // const how = document.querySelector('.how-link');
    // const pricing = document.querySelector('.pricing-link');
    // const shop = document.querySelector('.shop-link');
    // const signup = document.querySelector('.signup-link');

    // home.classList.remove('active-link');
    // how.classList.remove('active-link');
    // pricing.classList.remove('active-link');
    // shop.classList.add('active-link');
    // signup.classList.remove('active-link');
  }
  public onSign() {
    const home = document.querySelector('.navbar-collapse');
    home.classList.remove("show")
    this.router.navigate(['home/login']);

    // this.myFunction();

    // const home = document.querySelector('.home-link');
    // const how = document.querySelector('.how-link');
    // const pricing = document.querySelector('.pricing-link');
    // const shop = document.querySelector('.shop-link');
    // const signup = document.querySelector('.signup-link');

    // home.classList.remove('active-link');
    // how.classList.remove('active-link');
    // pricing.classList.remove('active-link');
    // shop.classList.remove('active-link');
    // signup.classList.add('active-link');
  }

  onAccount() {
    const home = document.querySelector('.navbar-collapse');
    home.classList.remove("show")
  }

  
  public logout() {
    this.authService.signOut();
    const home = document.querySelector('.navbar-collapse');
    home.classList.remove("show")
    this.router.navigate(['/home/login']);
    localStorage.clear();
    localStorage.setItem("LoggedIn" , "false");
    this.ngOnInit();
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