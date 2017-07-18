import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-updatepost',
  templateUrl: './updatepost.component.html',
  styleUrls: ['./updatepost.component.css']
})
export class UpdatepostComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
