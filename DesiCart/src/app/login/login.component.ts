import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
// import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  Message: any;
  showModal = false;
  form: FormGroup = new FormGroup({});

  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]

    });
  }

  ngOnInit(): void {
    this.showModal = true;
  }
  get f() {
    return this.form.controls;
  }

  submit() {
    // console.log(this.form.value);
    // console.log(this.email);
    // console.log(this.password);
    const headers = { 'x-api-key': 'pTBve3DrV2fJfGksPgBt5q0OVwB8Yiu6d5uxRSx2' };
    const body = {
      EmailID: this.email,
      Password: this.password,
      Type: 'Login'

    };
    this.http.post<any>('https://aban7ul865.execute-api.ap-south-1.amazonaws.com/dev/users', body, { headers }).subscribe((data => {
      console.log(data);
      if (data.Status === 1) {
        this.router.navigate(['/home/homepage']);
      }
      else {
        this.Message = data.Message;
      }
    }), (error) => {
      console.log(error);
    });
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
