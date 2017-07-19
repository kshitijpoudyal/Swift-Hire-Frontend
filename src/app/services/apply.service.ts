import { Injectable } from '@angular/core';
import { AuthHttp } from "angular2-jwt/angular2-jwt";
import { AuthService } from "app/services/auth.service";
import { Http } from "@angular/http";

@Injectable()
export class ApplyService {

  constructor(public http: Http, public auth: AuthService, public authHttp: AuthHttp) { }
  applyJobs(data: any) {

    let profile = this.auth.getUser();

    let userInfo = {
      _id: profile.identities[0].user_id,
      name: profile.name,
      email: profile.email,
      picture: profile.picture
    };
    return this.authHttp.post("http://localhost:8080/job/apply", { userInfo, data }).map(res => res.json());
  }
}
