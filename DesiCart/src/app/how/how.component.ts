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
  public contactUs()
  {
    this.router.navigate(['/home/contact']);
  }
}
