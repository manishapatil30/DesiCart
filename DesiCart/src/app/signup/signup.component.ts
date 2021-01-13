import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ControlContainer, AbstractControl } from '@angular/forms';
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
  phoneNumber: string = '';
  mobileNumber: string = '';
  password: string;
  lemail: any;
  lname: any;
  userID: any;
  hide = true;
  checkboxModel: boolean = false;
  // confirmPass: string;
  showModal = false;
  postId;
  form: FormGroup = new FormGroup({});
  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient, private authService: AuthService, private location: Location) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z]{1}[a-zA-Z0-9.\-_]*@[a-zA-Z]{1}[a-zA-Z.-]*[a-zA-Z]{1}[.][a-zA-Z]{3}$")]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9 ]{10}$'), Validators.maxLength(10),phoneNumberValidation]],
      name: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9 ]{10}$'), Validators.maxLength(10), phoneNumberValidation]],
      password: ['', [Validators.required, Validators.maxLength(8)]],
      checkbox: ['', Validators.required],
      checkboxModel:['']
      // confirmPass: ['', Validators.required]
      // ^((\\+91-?)|0)?[0-9]{10}$
    });
  }

  ngOnInit(): void {
    this.showModal = true;
    console.log({mobilenumber: this.form.get('mobileNumber').value})
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
    this.authService.signIn(socialPlatformProvider, { prompt: 'select_account' })
      .then((userData) => {
        this.user = userData;
        this.lemail = userData.email,
          this.lname = userData.name,
          localStorage.setItem("LoggedIn" , "true");
          //on success
          //this will return user data from google. What you need is a user token which you will send it to the server
          this.sendToRestApiMethod(userData.idToken);
      });
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

      if (data.Status === 1) {
        this.router.navigate(['/home/myaccount']);
      
        localStorage.setItem('usersid', this.userID);
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
  // localStorage.setItem("LoggedIn" , "true");
  submit() {
    
    // localStorage.setItem('username', this.name);
    const headers = { 'x-api-key': 'pTBve3DrV2fJfGksPgBt5q0OVwB8Yiu6d5uxRSx2' };
      if(this.form.valid) {
        const body = {
          EmailID: this.form.get('email').value,
          Name: this.form.get('name').value,
          Password: this.form.get('password').value,
          PhoneNo: this.form.get('phoneNumber').value,
          WhatsappNo: this.form.get('mobileNumber').value,
          CountryCode :1,
          WhatsappCountryCode :1,
          LockerCity :1,
          Type: 'SignUp'
    
        };
        this.http.post<any>('https://aban7ul865.execute-api.ap-south-1.amazonaws.com/dev/users', body, { headers }).subscribe((data => {
          console.log(data);
          this.userID = data.UserID;
    
          console.log(data.Message);
          if (data.Status === 1) {
            localStorage.setItem("LoggedIn" , "true");
            localStorage.setItem('usersid', this.userID);
            alert('Your Account Created Successfully.');
            this.router.navigate(['/home/myaccount']);
            window.scrollTo(0, 0);
          }
          else {
            alert('Error!Account not created please try again');
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
  public signup() {
    this.router.navigate(['/home/login']);
  }
  checkBoxValue: any = false;

  public showHidePassword(checkboxModel) {
    this.mobileNumber = checkboxModel ? '' : this.phoneNumber;
  }
  public showPassword(checkboxModel) {
    
    this.mobileNumber = checkboxModel ? '' : this.phoneNumber;
  }
  toggleShow() {

  }
  toggleShow11() {
    this.router.navigate(['/home/login']);
  }
  public terms() {
    this.router.navigate(['/home/terms']);
    window.scrollTo(0, 0);
  }
}

function phoneNumberValidation(control: AbstractControl) {
  if (control.value === ("0000000000")) {
    return { Invalid: true };
  }
  if (control.value === ("1111111111")) {
    return { Invalid: true };
  }
  if (control.value === ("2222222222")) {
    return { Invalid: true };
  }
  if (control.value === ("3333333333")) {
    return { Invalid: true };
  }
  if (control.value === ("4444444444")) {
    return { Invalid: true };
  }
  if (control.value === ("5555555555")) {
    return { Invalid: true };
  }
  if (control.value === ("6666666666")) {
    return { Invalid: true };
  }
  if (control.value === ("7777777777")) {
    return { Invalid: true };
  }
  if (control.value === ("8888888888")) {
    return { Invalid: true };
  }
  if (control.value === ("9999999999")) {
    return { Invalid: true };
  }
  else {
    return null;
  }
}