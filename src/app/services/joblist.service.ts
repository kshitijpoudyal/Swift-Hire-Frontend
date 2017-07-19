import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {AuthService} from "./auth.service";
import {AuthHttp} from "angular2-jwt";
import {ServiceUrls} from "../models/ServiceUrls";

@Injectable()
export class JoblistService {

  constructor(public http: Http, public auth: AuthService, public authHttp: AuthHttp) {
  }

  joblist() {
    return this.authHttp.get(ServiceUrls.LIST_JOBS_URL).map(res => res.json().jobs);
  }

}
