import {EventEmitter, Injectable} from '@angular/core';
import {Router} from "@angular/router";
import 'rxjs/add/operator/filter';
import {tokenNotExpired} from "angular2-jwt";

import Auth0Lock from 'auth0-lock';
import {Http} from "@angular/http";
import {User} from "../models/User";
import {ServiceUrls} from "../models/ServiceUrls";

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

  constructor(public route: Router, public http: Http) {
    this.loggedIn = new EventEmitter();
    this.lock.on('authenticated', (authResult) => {
      let profile = authResult.idTokenPayload;

      localStorage.setItem('token', authResult.idToken);
      localStorage.setItem('accessToken', authResult.accessToken);
      localStorage.setItem('profile', JSON.stringify(profile));

      let userInfo = new User();
      userInfo._id = profile.identities[0].user_id;
      userInfo.name = profile.name;
      userInfo.email = profile.email;
      userInfo.picture = profile.picture;
      http.post(ServiceUrls.ADD_USER_URL, {userInfo: userInfo}).map(res => res.json()).subscribe(data=>{

      });

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
