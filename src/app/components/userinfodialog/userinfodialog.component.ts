import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-userinfodialog',
  templateUrl: './userinfodialog.component.html',
  styleUrls: ['./userinfodialog.component.css']
})
export class UserinfodialogComponent implements OnInit {

  constructor(@Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
