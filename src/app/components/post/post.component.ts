import {Component, Input, OnInit} from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { ApplyService } from "../../services/apply.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

@Input()job:object;

  jobApplied = {
    job_id:"12",
    name: "Word press developer",
    feedback: "Good",
    rating: 3,
    preferred_date: new Date()
  }

  constructor(public auth: AuthService,private applyService:ApplyService) { }

  ngOnInit() {
  }
  apply() {
    console.log("Applied");
    this.applyService.applyJobs(this.jobApplied).subscribe(
      (data)=>console.log("---->"+JSON.stringify(data))
    );
  }

}
