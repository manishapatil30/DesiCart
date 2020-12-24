import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    
    private authSignin = new BehaviorSubject<any>(false);
    auth = this.authSignin.asObservable();

    constructor() { }
 
    logout() {
      this.authSignin.next(false);
    }

    login() {
        this.authSignin.next(true);
    }
}
