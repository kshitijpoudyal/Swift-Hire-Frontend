import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MdDialog} from "@angular/material";
import {UserinfodialogComponent} from "../userinfodialog/userinfodialog.component";
import {JobListProfileService} from "../../services/job-list-profile.service";

@Component({
  selector: 'app-profile-posted-jobs',
  templateUrl: './profile-posted-jobs.component.html',
  styleUrls: ['./profile-posted-jobs.component.css']
})
export class ProfilePostedJobsComponent implements OnInit {
  @Input()jobPosted;
  profile;
  status:string;
  rating:number[];
  norating:number[];
  appliedusers:any=[];
  jobDetailedList:any=[];
  constructor(public auth: AuthService,public dialogBox: MdDialog, public jobs: JobListProfileService) {

  }

  ngOnInit() {
    this.profile = this.auth.getUser();

    this.jobs.postedJobList(this.jobPosted.job_id).subscribe(data=>{
    this.jobDetailedList = data.jobs;
    this.appliedusers = data.jobs.applied_by;
    this.status = data.jobs.status;
    if(data.jobs.rating>=0){
      this.rating = Array(data.jobs.rating).fill("*");
      this.norating = Array(5-data.jobs.rating).fill("*");
    }
    });
  }
  openUserDialog(applieduser) {
    this.dialogBox.open(UserinfodialogComponent,{
      data: applieduser
    });
  }
}
