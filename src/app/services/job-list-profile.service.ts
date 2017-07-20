import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AuthService} from "./auth.service";
import {AuthHttp} from "angular2-jwt";
import {ServiceUrls} from "../models/ServiceUrls";

@Injectable()
export class JobListProfileService {

  constructor(public http: Http, public auth: AuthService, public authHttp: AuthHttp) {

  }
  appliedJoblist(job_id){
    return this.authHttp.get(ServiceUrls.GET_PROFILE_POSTED_JOBS_URL+job_id).map(res => res.json());
  }

  postedJobList(job_id){
    return this.authHttp.get(ServiceUrls.GET_PROFILE_APPLIED_JOBS_URL+job_id).map(res => res.json());
  }

}
