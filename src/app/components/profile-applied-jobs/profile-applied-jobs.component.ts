import {Component, Input, OnInit} from '@angular/core';
import {UsersJobHistoryService} from "../../services/users-job-history.service";
import {MdDialog} from "@angular/material";
import {AuthService} from "../../services/auth.service";
import {JobListProfileService} from "../../services/job-list-profile.service";

@Component({
  selector: 'app-profile-applied-jobs',
  templateUrl: './profile-applied-jobs.component.html',
  styleUrls: ['./profile-applied-jobs.component.css']
})
export class ProfileAppliedJobsComponent implements OnInit {
  @Input()jobApplied;
  profile;
  status:string;
  rating:number[];
  norating:number[];
  appliedusers:any=[];
  jobDetailedList:any=[];
  constructor(public auth: AuthService,public dialogBox: MdDialog, public jobs: JobListProfileService) {
    this.rating = [1,2,3];
    this.norating = [1,2];
    //this.status = "ongoing";
  }

  ngOnInit() {
    this.profile = this.auth.getUser();

    this.jobs.appliedJoblist(this.jobApplied.job_id).subscribe(data=>{
      this.jobDetailedList = data.jobs;
      this.appliedusers = data.jobs.applied_by;
      this.status = data.jobs.status;
      if(data.jobs.rating>=0){
        this.rating = Array(data.jobs.rating).fill("*");
        this.norating = Array(5-data.jobs.rating).fill("*");
      }
    });
  }

}
