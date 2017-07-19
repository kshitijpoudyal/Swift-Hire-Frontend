import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MdDialog} from "@angular/material";
import {UsersJobHistoryService} from "app/services/users-job-history.service";
import {UserinfodialogComponent} from "../userinfodialog/userinfodialog.component";

@Component({
  selector: 'app-profile-posted-jobs',
  templateUrl: './profile-posted-jobs.component.html',
  styleUrls: ['./profile-posted-jobs.component.css']
})
export class ProfilePostedJobsComponent implements OnInit {

  profile;
  rating:number[];
  status:string;
  norating:number[];
  appliedusers:object[];
  jobsPosted:any;
  constructor(public auth: AuthService,public dialogBox: MdDialog,public joblist:UsersJobHistoryService) {
    this.rating = [1,2,3];
    this.norating = [1,2];
    //this.status = "ongoing";
    this.appliedusers = [{name:'Kshitij'},
      {name:'Sulav'},
      {name:'Jamuna'},
      {name:'Manoj'},
      {name:'Candle'},
      {name:'Dinesh'}];
  }

  ngOnInit() {
    this.profile = this.auth.getUser();

    this.joblist.postedJobList(this.auth.getUser().identities[0].user_id).subscribe(data=>{
      this.jobsPosted = data.jobs.jobs_posted[0];
      console.log(this.jobsPosted);
    });
  }
  openUserDialog() {
    this.dialogBox.open(UserinfodialogComponent);
  }
}
