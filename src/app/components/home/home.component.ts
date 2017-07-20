import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MdDialog, MdDialogRef} from "@angular/material";
import {UpdatepostComponent} from "../updatepost/updatepost.component";
import {JoblistService} from "../../services/joblist.service";
import {EmitterService} from "../../services/emitter.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobs: any = [];

  ngOnInit(): void {
  }

  dialogRef: MdDialogRef<UpdatepostComponent>;

  constructor(public auth: AuthService, public dialog: MdDialog, public joblist: JoblistService, public emitter: EmitterService) {
    auth.loggedIn.subscribe(data => {
      this.joblist.joblist().subscribe(data => {
        this.jobs = data;
      });
    });

    if (auth.authenticated()) {
      this.joblist.joblist().subscribe(data => {
        this.jobs = data;
      });
    }
  }

  openDialog() {
    this.dialogRef = this.dialog.open(UpdatepostComponent);
  }

  updateSearchResult(resultJobs) {
    this.jobs = resultJobs.jobs;
  }

}
