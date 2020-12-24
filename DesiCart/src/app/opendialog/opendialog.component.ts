import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-opendialog',
  templateUrl: './opendialog.component.html',
  styleUrls: ['./opendialog.component.css']
})
export class OpendialogComponent implements OnInit {
  showModal = false;
  weight:any;
  price:any;
  constructor( public dialog: MatDialog,private router: Router,private route: ActivatedRoute) {
    this.showModal = true;
   }

  ngOnInit(): void {
    this.showModal = true;
    this.price = this.route.snapshot.params.pr;
    this.weight = this.route.snapshot.params.wet;
  }
  onClose() {
    this.showModal = false;
    //Allow fade out animation to play before navigating back
    setTimeout(
      () => this.router.navigate(['home/shipping']),
      100
    );
  }

  onDialogClick(event: UIEvent) {
    // Capture click on dialog and prevent it from bubbling to the modal background.
    event.stopPropagation();
    event.cancelBubble = true;
  }
  openDialog() {
    const dialogRef = this.dialog.open(OpendialogComponent,{
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
