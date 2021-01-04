import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paymentsuccessfull',
  templateUrl: './paymentsuccessfull.component.html',
  styleUrls: ['./paymentsuccessfull.component.css']
})
export class PaymentsuccessfullComponent implements OnInit {

  showModal = false;
  constructor(private router: Router,private route: ActivatedRoute) {
    this.showModal = true;
   }

  ngOnInit(): void {
    this.showModal = true;
  }
  onClose() {
    this.showModal = false;
    //Allow fade out animation to play before navigating back
    setTimeout(
      () => this.router.navigate(['home/payment']),
      100
    );
  }

  onDialogClick(event: UIEvent) {
    // Capture click on dialog and prevent it from bubbling to the modal background.
    event.stopPropagation();
    event.cancelBubble = true;
  }

}
