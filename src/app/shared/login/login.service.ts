import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

    USER_NAME = ''
    username = '';
    password = '';

    constructor(private http: HttpClient,
                private route: ActivatedRoute,
                private router: Router) {}

    login(username: string, password: string): Observable<any> {
        return this.http.post<any>('http://ec2-52-66-175-187.ap-south-1.compute.amazonaws.com:8083/users/login',
                { username, password }).pipe(map((res => {
                this.username = username;
                this.password = password;
                this.registerSuccessfulLogin(username);
                return res;
            }))
        );
    }

    registerSuccessfulLogin(username) {
        sessionStorage.setItem(this.USER_NAME, username)

    }

    isUserLoggedIn(){
        if(sessionStorage.length>0){
            return true;
        }
        return false;
    }

    logout() {
        sessionStorage.clear();
        this.router.navigate(['/authentication']);
    }

}