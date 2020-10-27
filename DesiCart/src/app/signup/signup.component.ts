import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  showModal = false;
//   emailFormControl = new FormControl('', [
//    Validators.required,
//    Validators.email,
//  ]);
  constructor( private router: Router) { 
  }

  ngOnInit(): void {
    this.showModal = true;
  //   this.loginForm = this._formBuilder.group({
  //     EmailID: ['', [Validators.required, Validators.email]],
  //     Password: ['', Validators.required]
  // });
  }
  onClose() {
    this.showModal = false;
    setTimeout(
      () => this.router.navigate(['/home']),
      100
    );
  }

  onDialogClick(event: UIEvent) {
    event.stopPropagation();
    event.cancelBubble = true;
  }
}
