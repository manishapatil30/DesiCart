import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SocialUser, GoogleLoginProvider } from 'angularx-social-login';
import { AuthService } from 'angularx-social-login';
import { Location } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  Message: any;
  email: string;
  name: string;
  checkbox: any;
  phoneNumber: string='';
  mobileNumber: string='';
  password: string;
  lemail: any;
  lname: any;
  checkboxModel:boolean = false;
  // confirmPass: string;
  showModal = false;
  postId;
  form: FormGroup = new FormGroup({});
  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient, private authService: AuthService, private location: Location) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'), Validators.maxLength(12)]],
      name: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'), Validators.maxLength(12)]],
      password: ['', Validators.required],
      checkbox: ['', Validators.required]
      // confirmPass: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.showModal = true;
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.lemail = user.email,
    //     this.lname = user.name,
    //     this.loggedIn = (user != null);

    // });
  }
  get f() {
    return this.form.controls;
  }
  public signInWithGoogle() {
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.authService.signIn(socialPlatformProvider)
      .then((userData) => {
        this.user = userData;
        this.lemail = userData.email,
          this.lname = userData.name,
          //on success
          //this will return user data from google. What you need is a user token which you will send it to the server
          this.sendToRestApiMethod(userData.idToken);
      });
  }
  sendToRestApiMethod(token: string): void {
    localStorage.setItem('userid', this.lemail);
    localStorage.setItem('username', this.lname);
    const headers = { 'x-api-key': 'pTBve3DrV2fJfGksPgBt5q0OVwB8Yiu6d5uxRSx2' };
    const body = {
      EmailID: this.lemail,
      Name: this.lname
    }

    this.http.post<any>('https://aban7ul865.execute-api.ap-south-1.amazonaws.com/dev/user-signup-social', body, { headers }).subscribe((data => {
      console.log(data);
      if (data.Status === 1) {
        this.router.navigate(['/home']);
        location.reload();
      }
      else {
        this.Message = data.Message;
      }
    }), (error) => {
      console.log(error);
    });
  }
  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  //   const headers = { 'x-api-key': 'pTBve3DrV2fJfGksPgBt5q0OVwB8Yiu6d5uxRSx2' };
  //   const body = {
  //     EmailID: this.lemail,
  //     Name: this.lname

  //   };
  //   this.http.post<any>('https://aban7ul865.execute-api.ap-south-1.amazonaws.com/dev/user-signup-social', body, { headers }).subscribe((data => {

  //     if (data.Status === 1) {
  //       console.log(data);

  //       this.router.navigate(['/home/homepage']);


  //     }
  //     else {
  //       this.Message = data.Message;
  //     }
  //   }), (error) => {
  //     console.log(error);
  //     alert('Error!!...Please Try Again');
  //   });
  // }
  submit() {
    // console.log(this.form.value);
    localStorage.setItem('username', this.name);
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
      console.log(data.Message);
      if (data.Status === 1) {
        alert('Your Account Created Successfully.');
        this.router.navigate(['/home']);
        location.reload();
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
  public signup() {
    this.router.navigate(['/home/login']);
  }
  checkBoxValue: any = false;

  public showHidePassword(checkboxModel) {
    this.mobileNumber = checkboxModel ? '' : this.phoneNumber;
  }
  public showPassword(checkboxModel) {
    this.phoneNumber = checkboxModel ? '' : this.mobileNumber;
  }
}
