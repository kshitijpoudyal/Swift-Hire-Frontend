import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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
export class HomeComponent implements OnInit{
  jobs:any = [];

  ngOnInit(): void {
    if(this.auth.authenticated()){
      this.jobs = this.joblist.joblist().subscribe(data=>{
        this.jobs = data;
      });
    }
  }

  dialogRef: MdDialogRef<UpdatepostComponent>;

  constructor(public auth: AuthService, public dialog: MdDialog,public joblist:JoblistService, public emitter:EmitterService) {

    this.emitter.eventEmitter.subscribe((job)=>{
      this.jobs.unshift(job);
      this.ngOnInit();
    });
  }

  openDialog() {
    this.dialogRef = this.dialog.open(UpdatepostComponent);
  }

}
