import { AccountService } from './myaccount.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  UserID: any;
  tableData: any;
  
  constructor(private router: Router, 
    private fb: FormBuilder, 
    private http: HttpClient,
    private account: AccountService
    ) {
    this.UserID = localStorage.getItem('usersid');
    console.log(this.UserID);
  }

  ngOnInit(): void {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload');
      location.reload();
    } else {
      localStorage.removeItem('foo');
    }
    // const headers = { 'x-api-key': 'pTBve3DrV2fJfGksPgBt5q0OVwB8Yiu6d5uxRSx2' };
    // this.http.get<any>('https://aban7ul865.execute-api.ap-south-1.amazonaws.com/dev/users?UserID=' + this.UserID, { headers }).subscribe(data => {
    //   console.log(data);
    //   this.tableData = data.Users;
    //   console.log(this.tableData);
    // })

    this.account.getUserInfo().subscribe((data: any) => {
      this.tableData = data.Users;
      console.log(this.tableData);
    })
  }
  public contactUs() {
    this.router.navigate(['/home/contact']);
    window.scrollTo(0, 0);
  }
  public provibited(){
    this.router.navigate(['/home/prohibited']);
    window.scrollTo(0, 0);
  }
  public terms(){
    this.router.navigate(['/home/terms']);
    window.scrollTo(0, 0);
  }
  public personal(){
    this.router.navigate(['/home/personal']);
    window.scrollTo(0, 0);
  }
  public onamshopping(){
    this.router.navigate(['/home/onamshopping']);
    window.scrollTo(0, 0);
  }
  public tosis(){
    this.router.navigate(['/home/tosis']);
    window.scrollTo(0, 0);
  }
}
