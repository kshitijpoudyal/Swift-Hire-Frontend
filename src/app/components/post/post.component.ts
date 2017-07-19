import {Component, Input, OnInit} from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { ApplyService } from "../../services/apply.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() job;

  constructor(public auth: AuthService, private applyService: ApplyService) { }

  ngOnInit() {
  }
  apply() {
    this.applyService.applyJobs(this.job).subscribe(
      (data) => console.log("---->" + JSON.stringify(data))
    );
  }

}
