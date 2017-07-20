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
    let id = this.auth.getUser().identities[0].user_id;
    return this.authHttp.get(ServiceUrls.LIST_JOBS_URL + id).map(res => res.json().jobs);
  }

}
