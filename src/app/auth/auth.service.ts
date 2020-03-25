import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;
  constructor() { }

  checkusernameandpassword(u:string,p:string){
    console.log(u,p)
    if(u=="admin" && p=="admin123"){
      localStorage.setItem('username',"admin");
      return true;
    }else{
      return false;
    }
  }
  // login(): Observable<boolean> {
  //   return of(true).pipe(
  //     delay(1000),
  //     tap(val => this.isLoggedIn = true)
  //   );
  // }

  // logout(): void {
  //   this.isLoggedIn = false;
  // }
}
