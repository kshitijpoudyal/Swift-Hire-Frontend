import {Injectable} from '@angular/core';
import {AuthHttp} from "angular2-jwt/angular2-jwt";
import {AuthService} from "app/services/auth.service";
import {Http} from "@angular/http";
import {ServiceUrls} from "../models/ServiceUrls";
import {User} from "../models/User";
import {Job} from "../models/Job";

@Injectable()
export class ApplyService {

  constructor(public http: Http, public auth: AuthService, public authHttp: AuthHttp) {
  }

  applyJobs(data: any) {
    let profile = this.auth.getUser();
    let userInfo = new User();
    userInfo._id = profile.identities[0].user_id;
    userInfo.name = profile.name;
    userInfo.email = profile.email;
    userInfo.picture = profile.picture;

    let jobInfo = new Job();
    jobInfo._id = data._id;
    jobInfo.title = data.title;
    jobInfo.category = data.category;
    jobInfo.preferred_date = data.preferred_date;
    jobInfo.preferred_time = data.preferred_time;
    jobInfo.duration = data.duration;
    jobInfo.hourly_rate = data.hourly_rate;
    jobInfo.description = data.description;
    jobInfo.applied_by = data.applied_by;
    jobInfo.posted_by = data.posted_by;
    jobInfo.status = data.status;
    jobInfo.granted = data.gradient;
    jobInfo.approved_user = data.approved_user;
    return this.http.post(ServiceUrls.APPLY_JOB_URL, {jobInfo, userInfo}).map(res => res.json());
  }
}
