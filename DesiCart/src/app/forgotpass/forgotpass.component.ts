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
  form: FormGroup = new FormGroup({});

  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]]
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

  }
  public signup() {
    this.router.navigate(['/home/login']);
  }
}
