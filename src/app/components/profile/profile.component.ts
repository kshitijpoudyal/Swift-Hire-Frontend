import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MdDialog} from "@angular/material";
import {UserinfodialogComponent} from "../userinfodialog/userinfodialog.component";
import {JoblistService} from "../../services/joblist.service";
import {UsersJobHistoryService} from "../../services/users-job-history.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  jobsPosted:any=[];
  jobsApplied:any=[];
  ngOnInit(): void {
    this.joblist.postedJobList(this.auth.getUser().identities[0].user_id).subscribe(data=>{
      this.jobsPosted = data.jobs.jobs_posted;
      console.log(this.jobsPosted);
    });

    this.joblist.appliedJoblist(this.auth.getUser().identities[0].user_id).subscribe(data=>{
      this.jobsApplied = data.jobs.jobs_applied;
    });
  }

  constructor(public auth: AuthService,public joblist:UsersJobHistoryService) {
  }



}
