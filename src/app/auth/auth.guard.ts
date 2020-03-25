import { Injectable } from '@angular/core';
import {  Route,CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(localStorage.getItem('username') != null){
      return true
    }else{
      this.router.navigate(['/login']);
        return false;
    }
  }
  canLoad(route: Route): boolean {
    // if (route.path === "shifts") {
    //     return true;
    // } else {
    //     return false;
    // }   
    
    if(localStorage.getItem('username') != null){
      return true
    }else{
      this.router.navigate(['/login']);
        return false;
    }
  }
}
