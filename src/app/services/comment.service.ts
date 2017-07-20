import { Injectable } from '@angular/core';
import { AuthService } from "app/services/auth.service";
import { Http } from "@angular/http";
import { User } from "app/models/User";
import { Job } from "app/models/Job";
import { ServiceUrls } from "../models/ServiceUrls";

@Injectable()
export class CommentService {

  constructor(public http: Http, public auth: AuthService) { }
  addComment(data: any, jobId: string) {
    let uId = "110133691091098143700";
    // let jobId = "1101336910910981437001";
    let feedback = "Really Good";
    let rating = 3;
    return this.http.post(ServiceUrls.ADD_COMMENT_URL, { uId, jobId, feedback, rating }).map(res => res.json());
  }
  commentForEmployer(data: any, jobId: string, empId) {
    let feedback = data;
    let rating = 3;
    return this.http.post(ServiceUrls.ADD_COMMENTPOSTED_URL, { jobId, empId, feedback, rating }).map(res => res.json());
  }

}
