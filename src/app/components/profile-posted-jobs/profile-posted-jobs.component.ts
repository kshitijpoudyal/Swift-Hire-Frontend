import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MdDialog} from "@angular/material";
import {UserinfodialogComponent} from "../userinfodialog/userinfodialog.component";
import {JobListProfileService} from "../../services/job-list-profile.service";
import {JobService} from "../../services/job.service";

@Component({
  selector: 'app-profile-posted-jobs',
  templateUrl: './profile-posted-jobs.component.html',
  styleUrls: ['./profile-posted-jobs.component.css']
})
export class ProfilePostedJobsComponent implements OnInit {
  @Input() jobPosted;
  profile;
  status: string;
  rating: number[];
  norating: number[];
  appliedusers: any = [];
  jobDetailedList: any = [];

  constructor(public auth: AuthService, public dialogBox: MdDialog, public jobs: JobListProfileService, public jobService: JobService, public changeDetector: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.profile = this.auth.getUser();

    this.jobs.postedJobList(this.jobPosted.job_id).subscribe(data => {
      this.jobDetailedList = data.jobs;
      this.appliedusers = data.jobs.applied_by;

      this.status = data.jobs.status;
      if (data.jobs.rating >= 0) {
        this.rating = Array(data.jobs.rating).fill("*");
        this.norating = Array(5 - data.jobs.rating).fill("*");
      }
    });
  }

  openUserDialog(applieduser) {
    this.dialogBox.open(UserinfodialogComponent, {
      data: {'applieduser': applieduser, 'jobDetail': this.jobDetailedList}
    });
  }

  closeJob() {
    this.jobService.closeJob(this.jobPosted.job_id).subscribe(data => {
    });
  }
}
