import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <h2 md-dialog-title>Swift Hire</h2>
    <md-dialog-content>{{ data }}</md-dialog-content>
    <md-dialog-actions>
      <button md-button md-dialog-close>No</button>
      <!-- Can optionally provide a result for the closing dialog. -->
      <button md-button [md-dialog-close]="true">Yes</button>
    </md-dialog-actions>
  `,
  styles: []
})
export class ConfirmationDialog implements OnInit {

  constructor(@Inject(MD_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

}
