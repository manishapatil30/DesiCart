import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-opendialog',
  templateUrl: './opendialog.component.html',
})
export class OpendialogComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
    this.openDialog();
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
