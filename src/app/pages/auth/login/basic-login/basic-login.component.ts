import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../../../shared/login/login.service';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {

  users: Array<any>;
  username: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  USER_ID = '';
  API_KEY = '';

  constructor(private route: ActivatedRoute,
            private router: Router,
            private loginservice: LoginService) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

  handleLogin(){
    this.loginservice.login(this.username, this.password).subscribe((result)=>  {
      sessionStorage.setItem(this.USER_ID, result.userId);
      sessionStorage.setItem(this.API_KEY, result.apiKey);
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = result.responseMessage;
      this.router.navigate(['/dashboard']);
    }, (error) => {
      this.invalidLogin = true;
      this.loginSuccess = false;
      this.errorMessage = error.error;
    });      
  }

}
