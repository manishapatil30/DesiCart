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
  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient) {
    this.UserID = localStorage.getItem('usersid');
    console.log(this.UserID);
  }

  ngOnInit(): void {
    const headers = { 'x-api-key': 'pTBve3DrV2fJfGksPgBt5q0OVwB8Yiu6d5uxRSx2' };
    this.http.get<any>('https://aban7ul865.execute-api.ap-south-1.amazonaws.com/dev/users?UserID=' + this.UserID, { headers }).subscribe(data => {
      console.log(data);
      this.tableData = data.Users;
      console.log(this.tableData);

    })
  }

}
