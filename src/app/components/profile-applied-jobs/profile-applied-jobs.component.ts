import {Component, Input, OnInit} from '@angular/core';
import {UsersJobHistoryService} from "../../services/users-job-history.service";
import {MdDialog} from "@angular/material";
import {AuthService} from "../../services/auth.service";
import {JobListProfileService} from "../../services/job-list-profile.service";
import {CommentService} from "../../services/comment.service";

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
  posteduser:any;
  jobDetailedList:any=[];
  sliderValue:number;
  constructor(public auth: AuthService,public dialogBox: MdDialog, public jobs: JobListProfileService,public comment: CommentService) {
  }

  ngOnInit() {
    this.profile = this.auth.getUser();

    this.jobs.appliedJoblist(this.jobApplied.job_id).subscribe(data=>{
      this.jobDetailedList = data.jobs;
      this.posteduser = data.jobs.posted_by;
      this.status = data.jobs.status;
      if(data.jobs.rating>=0){
        this.rating = Array(data.jobs.rating).fill("*");
        this.norating = Array(5-data.jobs.rating).fill("*");
      }
    });
  }
  onSliderChange(event){
    this.sliderValue = event.value;

  }

  updateFeedBack(feedback){
    this.comment.addComment(this.posteduser._id,this.jobApplied.job_id,feedback,this.sliderValue).subscribe(data=>{
    });


  }

  canIComment(){
    console.log("can i comment: "+this.jobApplied.title);
    console.log(this.status,this.jobApplied.feedback);
    console.log(this.status==='completed' && this.jobApplied.feedback==='');
    return this.status==='completed' && this.jobApplied.rating===-1;
  }

}
