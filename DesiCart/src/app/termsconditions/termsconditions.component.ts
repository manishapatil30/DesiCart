import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-termsconditions',
  templateUrl: './termsconditions.component.html',
  styleUrls: ['./termsconditions.component.css']
})
export class TermsconditionsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
