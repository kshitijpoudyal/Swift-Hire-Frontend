import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {UpdatepostComponent} from "./components/updatepost/updatepost.component";
import {MdDialog} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  profile;

  constructor(public auth: AuthService) {
    auth.loggedIn.subscribe(profile => {
      this.profile = profile;
    });
  }

  ngOnInit() {
    if(!this.profile)
      this.profile = this.auth.getUser();
  }

}
