import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ApplyService} from "../../services/apply.service";
import {MdDialog} from "@angular/material";
import {ConfirmationDialog} from "../confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() job;

  constructor(public auth: AuthService, private applyService: ApplyService, public dialog: MdDialog) {
  }

  ngOnInit() {
  }

  apply() {
    let dialogRef = this.dialog.open(ConfirmationDialog, {
      data: 'Are you sure to apply for this job?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.applyService.applyJobs(this.job).subscribe(
          (data) => {
            console.log(data);
          }
        );
      }
    });
  }

}
