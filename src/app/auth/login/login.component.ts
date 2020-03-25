import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthService:AuthService, private routes:Router) { }
  msg;
  ngOnInit() {
  }
  submit(u:string, p:string){
    console.log(u);
   console.log(p);
   var output = this.AuthService.checkusernameandpassword(u,p);
   if(output == true)
    {
      console.log('admin going')
      this.routes.navigate(['/admin']);
    }
    else{
    this.msg ='Invalid username or password';
    }
  }
  logout(){
    localStorage.clear();
  }
}
