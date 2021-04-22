import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-servicechargecalculatordialog',
  templateUrl: './servicechargecalculatordialog.component.html',
  styleUrls: ['./servicechargecalculatordialog.component.css']
})
export class ServicechargecalculatordialogComponent implements OnInit {

  showModal = false;
  weight:any;
  price:any;
  pic:any;
  post:any;
  ratedata:any;
  wweight:any;
  constructor( public dialog: MatDialog,private router: Router,private route: ActivatedRoute) {
    this.showModal = true;
   }

  ngOnInit(): void {
    this.showModal = true;
    this.pic = this.route.snapshot.params.price;
  }
  onClose() {
    this.showModal = false;
    //Allow fade out animation to play before navigating back
    setTimeout(
      () => this.router.navigate(['home/pricing']),
      100
    );
  }

  onDialogClick(event: UIEvent) {
    // Capture click on dialog and prevent it from bubbling to the modal background.
    event.stopPropagation();
    event.cancelBubble = true;
  }
  openDialog() {
    const dialogRef = this.dialog.open(ServicechargecalculatordialogComponent,{
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}
