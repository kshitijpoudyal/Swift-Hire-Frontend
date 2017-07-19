import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MdDialog, MdDialogRef} from "@angular/material";
import {UpdatepostComponent} from "../updatepost/updatepost.component";
import {JoblistService} from "../../services/joblist.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  jobs:object = [];

  ngOnInit(): void {
    if(this.auth.authenticated()){
      this.jobs = this.joblist.joblist().subscribe(data=>{
        this.jobs = data;
        console.log(data);
      });
    }
    //console.log(this.jobs);
  }

  selectedOption: string;

  //dialogRef: MdDialogRef<UpdatepostComponent>;

  constructor(public auth: AuthService, public dialog: MdDialog,public joblist:JoblistService) {
  }

  openDialog() {
    this.dialog.open(UpdatepostComponent);
    // this.dialogRef.afterClosed().subscribe(result => {
    //   this.selectedOption = result;
    // });
  }

}
