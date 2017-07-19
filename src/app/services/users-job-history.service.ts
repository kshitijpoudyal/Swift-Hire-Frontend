import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AuthService} from "./auth.service";
import {AuthHttp} from "angular2-jwt";
import {ServiceUrls} from "../models/ServiceUrls";

@Injectable()
export class UsersJobHistoryService {

  constructor(public http: Http, public auth: AuthService, public authHttp: AuthHttp) {

  }
  appliedJoblist(user_id){
    return this.authHttp.get(ServiceUrls.PROFILE_APPLIED_JOBS_URL+user_id).map(res => res.json());
  }

  postedJobList(user_id){
    return this.authHttp.get(ServiceUrls.PROFILE_POSTED_JOBS_URL+user_id).map(res => res.json());
  }

}
