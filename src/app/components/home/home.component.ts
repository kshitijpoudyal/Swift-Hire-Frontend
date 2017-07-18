import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MdDialog, MdDialogRef} from "@angular/material";
import {UpdatepostComponent} from "../updatepost/updatepost.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedOption: string;

  dialogRef: MdDialogRef<UpdatepostComponent>;

  constructor(public auth: AuthService, public dialog: MdDialog) {
  }

  openDialog() {
    this.dialog.open(UpdatepostComponent);
    // this.dialogRef.afterClosed().subscribe(result => {
    //   this.selectedOption = result;
    // });
  }
}
