import { Component, OnInit } from '@angular/core';
import {UsersJobHistoryService} from "../../services/users-job-history.service";
import {MdDialog} from "@angular/material";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-profile-applied-jobs',
  templateUrl: './profile-applied-jobs.component.html',
  styleUrls: ['./profile-applied-jobs.component.css']
})
export class ProfileAppliedJobsComponent implements OnInit {

  profile;
  rating:number[];
  status:string;
  norating:number[];
  appliedusers:object[];
  jobsPosted:any;
  jobsApplyed:any;
  constructor(public auth: AuthService,public joblist:UsersJobHistoryService) {
    this.rating = [1,2,3];
    this.norating = [1,2];
    //this.status = "ongoing";
  }

  ngOnInit() {
    this.joblist.postedJobList(this.auth.getUser().identities.user_id).subscribe(data=>{
      console.log()
      this.jobsApplyed = data.user_jobs_applyed;
      this.jobsPosted = data.user_jobs_posted;
    });
  }

}
