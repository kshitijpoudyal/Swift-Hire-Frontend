import { Injectable } from '@angular/core';
import { AuthService } from "app/services/auth.service";
import { Http } from "@angular/http/http";
import { User } from "app/models/User";
import { Job } from "app/models/Job";
import {ServiceUrls} from "../models/ServiceUrls";

@Injectable()
export class CommentService {

  constructor(public http: Http, public auth: AuthService) { }
addComment(data:any){
  let uId = "110133691091098143700";
  let jobId="1101336910910981437001";
  let feedback="Really Good";
  let rating=3;
  // let profile=this.auth.getUser();
  // let userInfo = new User();{"_id":"110133691091098143700",job_id:1101336910910981437001}
  //   userInfo._id = profile.identities[0].user_id;
  //   userInfo.name = profile.name;
  //   userInfo.email = profile.email;
  //   userInfo.picture = profile.picture;

  //   let jobInfo = new Job();
  //   jobInfo._id=data._id;
  //   jobInfo.title = data.title;
  //   jobInfo.category = data.category;
  //   jobInfo.preferred_date =data.preferred_date;
  //   jobInfo.preferred_time = data.preferred_time;
  //   jobInfo.duration = data.duration;
  //   jobInfo.hourly_rate = data.hourly_rate;
  //   jobInfo.description = data.description;
  //   jobInfo.applied_by = data.applied_by;
  //   jobInfo.posted_by = data.posted_by;
  //   jobInfo.status = data.status;

    return this.http.post(ServiceUrls.ADD_COMMENT_URL,{uId,jobId,feedback,rating}).map(res=>res.json());
}

}
