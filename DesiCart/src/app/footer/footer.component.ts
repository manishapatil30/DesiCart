import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public provibited(){
    this.router.navigate(['/home/prohibited']);
    window.scrollTo(0, 0);
  }
  public terms(){
    this.router.navigate(['/home/terms']);
    window.scrollTo(0, 0);
  }

  public contactUs() {
    this.router.navigate(['/home/contact']);
    window.scrollTo(0, 0);
  }
}
