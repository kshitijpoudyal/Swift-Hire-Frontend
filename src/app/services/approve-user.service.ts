import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {AuthHttp} from "angular2-jwt";
import {ServiceUrls} from "../models/ServiceUrls";

@Injectable()
export class ApproveUserService {

  constructor(public http: Http, public authHttp: AuthHttp) {
  }

  approveUser(data) {
    let reqData = {'userInfo': data.applieduser, 'jobInfo': data.jobDetail};
    return this.http.post(ServiceUrls.APPROVE_USER_PROFILE, reqData).map(res => res.json());
  }

}
