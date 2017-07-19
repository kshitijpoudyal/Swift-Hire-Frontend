import {Injectable} from '@angular/core';
import {AuthHttp} from "angular2-jwt/angular2-jwt";
import {AuthService} from "app/services/auth.service";
import {Http} from "@angular/http";
import {ServiceUrls} from "../models/ServiceUrls";

@Injectable()
export class ApplyService {

  constructor(public http: Http, public auth: AuthService, public authHttp: AuthHttp) {
  }

  applyJobs(data: any) {
    console.log("Service called" + JSON.stringify(data));
    return this.authHttp.post(ServiceUrls.APPLY_JOB_URL, data).map(res => res.json());
  }
}
