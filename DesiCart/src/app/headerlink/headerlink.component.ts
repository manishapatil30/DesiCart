import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerlink',
  templateUrl: './headerlink.component.html',
  styleUrls: ['./headerlink.component.css']
})
export class HeaderlinkComponent implements OnInit {
  x: any;
  popup:any;
  useremail: any;
  constructor(private router: Router) {
    this.useremail = localStorage.getItem('username');
    console.log(localStorage.getItem('username'));
  }

  ngOnInit(): void {
    // if (!localStorage.getItem('foo')) {
    //   localStorage.setItem('foo', 'no reload');
    //   location.reload();
    // } else {
    //   localStorage.removeItem('foo');
    // }
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
    localStorage.clear();
    this.router.navigate(['/']);
  }
  public myPopupbox() {
    this.popup = document.getElementById('myPopup');
    this.popup.classList.toggle("show");
  }
}
