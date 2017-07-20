import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA} from "@angular/material";
import {ApproveUserService} from "../../services/approve-user.service";

@Component({
  selector: 'app-userinfodialog',
  templateUrl: './userinfodialog.component.html',
  styleUrls: ['./userinfodialog.component.css']
})
export class UserinfodialogComponent implements OnInit {

  constructor(@Inject(MD_DIALOG_DATA) public data: any, public approveUserService: ApproveUserService) {
  }

  ngOnInit() {
  }

  approveUser() {
    for (let i = 0; i < this.data.applieduser.jobs_applied.length; i++) {
      if (this.data.applieduser.jobs_applied[i].job_id === this.data.jobDetail._id) {
        this.data.applieduser.jobs_applied[i].granted = true;
        break;
      }
    }
    this.data.jobDetail.approved_user = this.data.applieduser;
    this.data.jobDetail.status = 'ongoing';
    this.approveUserService.approveUser(this.data).subscribe(data => {
      console.log(data);
    });
  }

}
