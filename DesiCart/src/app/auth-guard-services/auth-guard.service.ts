import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  boolean | Observable<boolean> | Promise<boolean> {
    if(localStorage.getItem('usersid')){
        return true;
    }
    else{
        this.router.navigate(['/home/login']);
        localStorage.clear();
        return false;
    }
  }
}
