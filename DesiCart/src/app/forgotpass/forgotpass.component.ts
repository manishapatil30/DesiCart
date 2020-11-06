import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {
  showModal = false;
  email: string;
  password: any;
  hide = true;
  display = false;
  token: any;
  form: FormGroup = new FormGroup({});

  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient) {
    
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(8)]],
    });
  }
  ngOnInit(): void {
    this.showModal = true;
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
  get f() {
    return this.form.controls;
  }
  public submit() {
    const headers = { 'x-api-key': 'pTBve3DrV2fJfGksPgBt5q0OVwB8Yiu6d5uxRSx2' };
    const body = {
      EmailID: this.email

    };
    this.http.post<any>('https://aban7ul865.execute-api.ap-south-1.amazonaws.com/dev/resetpassword', body, { headers }).subscribe((data => {
      console.log(data);
      if (data.Status === 1) {
        this.display = !this.display;
        this.token = data.Token;
        console.log(this.token);
      }
    }), (error) => {
      console.log(error);
    });
  }
  public signup() {
    this.router.navigate(['/home/login']);
  }
  public reset() {
    const headers = { 'x-api-key': 'pTBve3DrV2fJfGksPgBt5q0OVwB8Yiu6d5uxRSx2' };
    const body = {
      Password: this.password

    };
    this.http.put<any>('https://aban7ul865.execute-api.ap-south-1.amazonaws.com/dev/resetpassword/'+ this.token, body, { headers }).subscribe((data => {
      console.log(data);
      if (data.Status === 1) {
        alert("update your password successfully.");
        this.router.navigate(['/home/login']);
      }
    }), (error) => {
      console.log(error);
    });
  }
}
