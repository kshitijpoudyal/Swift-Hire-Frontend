import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MdDialog} from "@angular/material";
import {UserinfodialogComponent} from "../userinfodialog/userinfodialog.component";
import {JoblistService} from "../../services/joblist.service";
import {UsersJobHistoryService} from "../../services/users-job-history.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  constructor(public auth: AuthService) {
  }



}
