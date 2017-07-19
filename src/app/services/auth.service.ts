import {EventEmitter, Injectable} from '@angular/core';
import {Router} from "@angular/router";
import 'rxjs/add/operator/filter';
import {tokenNotExpired} from "angular2-jwt";

import Auth0Lock from 'auth0-lock';

@Injectable()
export class AuthService {

  loggedIn: EventEmitter<string>;

  lock = new Auth0Lock('4dj7RpeuSXB4K2meiDdxCeo82FxfNIBV', 'swifthire.auth0.com', {
    socialButtonStyle: 'small',
    redirect: false,
    theme: {
      labeledSubmitButton: false,
      primaryColor: '#3F51B5'
    },
    languageDictionary: {
      emailInputPlaceholder: "swifthire@swifthire.com",
      title: "Swift Hire"
    },
    auth: {
      params: {
        scope: 'openid profile'
      },
    }
  });

  constructor(public route: Router) {
    this.loggedIn = new EventEmitter();
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('token', authResult.idToken);
      localStorage.setItem('accessToken', authResult.accessToken);
      localStorage.setItem('profile', JSON.stringify(authResult.idTokenPayload));
      this.loggedIn.emit(authResult.idTokenPayload);
    });
  }

  public login() {
    this.lock.show();
  }

  public authenticated() {
    return tokenNotExpired();
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('accessToken');
    localStorage.removeItem("profile");
    this.route.navigate(['']);
  }

  public getUser() {
    return JSON.parse(localStorage.getItem('profile'));
  }

  public getToken() {
    return localStorage.removeItem('token');
  }

}
