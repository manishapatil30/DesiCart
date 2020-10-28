import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string;
  name: string;
  phoneNumber: string;
  mobileNumber: string;
  password: string;
  // confirmPass: string;
  showModal = false;
  postId;
  form: FormGroup = new FormGroup({});
  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'), Validators.maxLength(12)]],
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required]
      // confirmPass: ['', Validators.required]
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
    const headers = { 'x-api-key': 'pTBve3DrV2fJfGksPgBt5q0OVwB8Yiu6d5uxRSx2' };
    const body = {
      EmailID: this.email,
      Name: this.name,
      Password: this.password,
      PhoneNo: this.phoneNumber,
      WhatsappNo: this.mobileNumber,
      Type: 'SignUp'

    };
    this.http.post<any>('https://aban7ul865.execute-api.ap-south-1.amazonaws.com/dev/users', body, { headers }).subscribe((data => {
      console.log(data);
      this.router.navigate(['/home/login']);
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
  public signup() {
    this.router.navigate(['/home/login']);
  }
}
