import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';
declare var $: any;

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
    this.useremail = localStorage.getItem('username');
    console.log(localStorage.getItem('username'));
    this.useremail = localStorage.getItem('username');
    this.username = localStorage.getItem('name');
    console.log(localStorage.getItem('name'));

  }

  ngOnInit(): void {
    // if (!localStorage.getItem('foo')) {
    //   localStorage.setItem('foo', 'no reload');
    //   location.reload();
    // } else {
    //   localStorage.removeItem('foo');
    // }
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
  public logout() {
    this.authService.signOut();
    this.router.navigate(['/home']);
    localStorage.clear();
    location.reload();
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
