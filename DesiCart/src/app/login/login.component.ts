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
import { BehaviorSubject } from 'rxjs';
import { LoginService } from './login.service';

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
  hide = true;
  isShown: boolean = false;
  isShownlog: boolean = false;
  form: FormGroup = new FormGroup({});

  constructor(private router: Router, 
    private fb: FormBuilder, private http: HttpClient, 
    private authService: AuthService, private loginService: LoginService) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{1}[a-zA-Z0-9.\-_]*@[a-zA-Z]{1}[a-zA-Z.-]*[a-zA-Z]{1}[.][a-zA-Z]{3}$')]],
      password: ['', Validators.required]

    });
  }

  ngOnInit(): void {
    this.showModal = true;
    this.isShownlog = true;
    // if (!localStorage.getItem('foo')) {
    //   localStorage.setItem('foo', 'no reload');
    //   location.reload();
    // } else {
    //   localStorage.removeItem('foo');
    // }
  }

  public signInWithGoogle() { 
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.authService.signIn(socialPlatformProvider, { prompt: 'select_account' })
      .then((userData) => {
        localStorage.setItem("LoggedIn" , "true");
        this.user = userData;
        this.lemail = userData.email,
        console.log(this.lemail)
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
    // localStorage.setItem('userid', this.lemail);
    localStorage.setItem('username', this.lname);
    const headers = { 'x-api-key': 'pTBve3DrV2fJfGksPgBt5q0OVwB8Yiu6d5uxRSx2' };
    const body = {
      EmailID: this.lemail,
      Name: this.lname
    }

    this.http.post<any>('https://aban7ul865.execute-api.ap-south-1.amazonaws.com/dev/user-signup-social', body, { headers }).subscribe((data => {
      console.log(data);
      this.userID = data.UserID;
      localStorage.setItem('usersid', this.userID);
      if (data.Status === 1) {
        this.router.navigateByUrl('/home/myaccount');
        this.ngOnInit();
        window.scrollTo(0, 0);
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

    if(this.form.valid){
      const body = {
        EmailID: this.email,
        Password: this.password,
        Type: 'Login'
  
      };
      this.http.post<any>('https://aban7ul865.execute-api.ap-south-1.amazonaws.com/dev/users', body, { headers }).subscribe((data => {
        console.log(data);
        this.userID = data.UserID;
        localStorage.setItem('usersid', this.userID);
        localStorage.setItem("LoggedIn" , "true");
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
          this.router.navigateByUrl('/home/myaccount');
          window.scrollTo(0, 0);
          // location.reload();
  
        }
        else {
          this.Message = data.Message;
        }
      }), (error) => {
        console.log(error);
      });
    }
    else {
      alert("Invalid Fields")
    }
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
  toggleShow() {
    this.router.navigate(['/home/signup']);
  }
  toggleShow11() {
    this.isShown = false;
    this.isShownlog = true;
  }
}
