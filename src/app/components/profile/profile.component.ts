import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MdDialog} from "@angular/material";
import {UserinfodialogComponent} from "../userinfodialog/userinfodialog.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile;
  rating:number[];
  status:string;
  norating:number[];
  appliedusers:object[];
  constructor(public auth: AuthService,public dialogBox: MdDialog) {
    this.rating = [1,2,3];
    this.norating = [1,2];
    //this.status = "ongoing";
    this.appliedusers = [{name:'Kshitij'},
      {name:'Sulav'},
      {name:'Jamuna'},
      {name:'Manoj'},
      {name:'Candle'},
      {name:'Dinesh'}];
  }

  ngOnInit() {
    this.profile = this.auth.getUser();
  }

  openUserDialog() {
    this.dialogBox.open(UserinfodialogComponent);
  }

}
