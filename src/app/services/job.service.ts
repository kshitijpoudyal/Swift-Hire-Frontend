import {Injectable} from '@angular/core';
import {AuthService} from "./auth.service";
import {AuthHttp} from "angular2-jwt";
import {Http} from "@angular/http";
import {User} from "../models/User";
import {Job} from "../models/Job";
import {ServiceUrls} from "../models/ServiceUrls";

@Injectable()
export class JobService {

  constructor(public http: Http, public authHttp: AuthHttp, public auth: AuthService) {

  }

  add(formData, addressControl, longitude, latitude) {

    let profile = this.auth.getUser();

    let userInfo = new User();
    userInfo._id = profile.identities[0].user_id;
    userInfo.name = profile.name;
    userInfo.email = profile.email;
    userInfo.picture = profile.picture;

    let jobInfo = new Job();
    jobInfo.title = formData.controls['title'].value;
    jobInfo.category = formData.controls['category'].value;
    jobInfo.preferred_date = formData.controls['preferedDate'].value;
    jobInfo.preferred_time = formData.controls['preferedTime'].value;
    jobInfo.duration = parseInt(formData.controls['duration'].value);
    jobInfo.hourly_rate = parseFloat(formData.controls['hourlyRate'].value);
    jobInfo.description = formData.controls['description'].value;
    jobInfo.location = {
      address: addressControl.value,
      coords: [longitude, latitude]
    };
    jobInfo.status = 'pending';

    return this.http.post(ServiceUrls.ADD_JOB_URL, {userInfo, jobInfo}).map(res => res.json());
  }

}
