import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {UsersJobHistoryService} from "../../services/users-job-history.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  jobsPosted:any=[];
  jobsApplied:any=[];

  constructor(public auth: AuthService,public joblist:UsersJobHistoryService) {
  }

  ngOnInit(): void {
    this.joblist.postedJoblist(this.auth.getUser().identities[0].user_id).subscribe(data=>{
      this.jobsPosted = data.jobs.jobs_posted;
    });

    this.joblist.appliedJoblist(this.auth.getUser().identities[0].user_id).subscribe(data=>{
      this.jobsApplied = data.jobs.jobs_applied;
    });
  }

}
