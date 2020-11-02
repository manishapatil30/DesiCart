import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
// import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SocialUser, GoogleLoginProvider } from 'angularx-social-login';
import { AuthService } from 'angularx-social-login';

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  email: string;
  password: string;
  Message: any;
  lemail: any;
  lname: any;
  userID: any;
  logname: any;
  dataa: any;
  showModal = false;
  form: FormGroup = new FormGroup({});

  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient, private authService: AuthService) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]

    });
  }

  ngOnInit(): void {
    this.showModal = true;

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
    // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.lemail = user.email,
    //     this.lname = user.name,
    //   this.loggedIn = (user != null);

    // });

    // const headers = { 'x-api-key': 'pTBve3DrV2fJfGksPgBt5q0OVwB8Yiu6d5uxRSx2' };
    // const body = {
    //   EmailID: this.lemail,
    //   Name: this.lname

    // };
    // this.http.post<any>('https://aban7ul865.execute-api.ap-south-1.amazonaws.com/dev/user-signup-social', body, { headers }).subscribe((data => {
    //   console.log(data);
    //   if (data.Status === 1) {
    //     // this.router.navigate(['/home/homepage']);
    //   }
    //   else {
    //     this.Message = data.Message;
    //   }
    // }), (error) => {
    //   console.log(error);
    // });
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
        this.router.navigateByUrl('/home');
        // location.reload();
      }
      else {
        this.Message = data.Message;
      }
    }), (error) => {
      console.log(error);
    });
  }
  get f() {
    return this.form.controls;
  }

  submit() {

    // console.log(this.form.value);
    // console.log(this.email);
    // console.log(this.password);
    // localStorage.setItem('username', this.name);
    const headers = { 'x-api-key': 'pTBve3DrV2fJfGksPgBt5q0OVwB8Yiu6d5uxRSx2' };
    const body = {
      EmailID: this.email,
      Password: this.password,
      Type: 'Login'

    };
    this.http.post<any>('https://aban7ul865.execute-api.ap-south-1.amazonaws.com/dev/users', body, { headers }).subscribe((data => {
      console.log(data);
      this.userID = data.UserID;
      if (data.Status === 1) {
        // this.router.navigate(['/home/homepage']);

        this.http.get<any>('https://aban7ul865.execute-api.ap-south-1.amazonaws.com/dev/users?UserID=' + this.userID, { headers }).subscribe(data => {
          console.log(data);
          this.dataa = data.Users;
          this.logname = this.dataa.Name;
          localStorage.setItem('username', this.logname);
        })
        alert('login Successfully.');
        localStorage.setItem('username', this.logname);
        this.router.navigateByUrl('/home');
        // location.reload();
        
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
