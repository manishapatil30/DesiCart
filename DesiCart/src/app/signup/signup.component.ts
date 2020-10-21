import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { 
    this.openDialog();
  }

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      // this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
