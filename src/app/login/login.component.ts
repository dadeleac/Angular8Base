import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_core/services/auth.service';
import { LoggerService } from '../_core/services/logger.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  constructor(private authService: AuthService, 
    private router : Router, 
    private log : LoggerService) { }

  private username : string;
  private password : string;

  login() : void {
      this.authService.login(this.username, this.password).subscribe(
       user => {
        
        this.router.navigate(["home"]);
        },
       error => {
        this.log.logError(error); 
       }
     ); 
  }


}
