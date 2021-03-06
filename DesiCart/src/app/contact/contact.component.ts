import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  email: any;
  message: any;
  subject: any;
  Messageerror: any;
  emailPattern = "^[a-zA-Z]{1}[a-zA-Z0-9.\-_]*@[a-zA-Z]{1}[a-zA-Z.-]*[a-zA-Z]{1}[.][a-zA-Z]{3}$";
  form: FormGroup = new FormGroup({});
  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder) {
    this.form = fb.group({
      
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]],
      message: ['', [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ]")]],
      subject: ['', [Validators.required, Validators.pattern(".*\\S.*[a-zA-z0-9 ]")]]

    });
  }

  ngOnInit(): void {
  }
  get f() {
    return this.form.controls;
  }
  submit() {
    const headers = { 'x-api-key': 'pTBve3DrV2fJfGksPgBt5q0OVwB8Yiu6d5uxRSx2' };
    const body = {
      EmailID: this.email,
      Subject: this.subject,
      Message: this.message
    };
    this.http.post<any>('https://aban7ul865.execute-api.ap-south-1.amazonaws.com/dev/userenquires', body, { headers }).subscribe((data => {
      console.log(data);
      if (data.Status === 1) {
       
        
        alert('Form submitted Successfully.');

        this.router.navigateByUrl('/home');
    }
      else {
        this.Messageerror = data.Message;
      }
    }), (error) => {
      console.log(error);
    });
  }
}
