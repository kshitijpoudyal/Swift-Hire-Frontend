import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AuthService} from "./auth.service";
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class UsersJobHistoryService {

  constructor(public http: Http, public auth: AuthService, public authHttp: AuthHttp) {

  }
  joblist(){
    return this.authHttp.get("http://localhost:8080/user/job-history").map(res => res.json());
  }

}
