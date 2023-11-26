import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private rout:Router){
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(localStorage.getItem('token')){
        return true;
      }else{
        sessionStorage.setItem('redirectUrl', state.url);
        // this.rout.navigate(['/auth/login']);
        this.rout.navigate(['/auth/login'],{queryParams:{returnUrl:state.url}});
        return false;
      }
      
  }
  
}
