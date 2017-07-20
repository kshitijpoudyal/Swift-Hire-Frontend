import 'hammerjs';

import {AuthHttp} from 'angular2-jwt';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AppRoutingProviders, Routing} from './routes/routes.module';
import {Http, HttpModule, RequestOptions} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule, MdDatepickerModule, MdNativeDateModule} from '@angular/material';
import {AuthService} from './services/auth.service';
import {authHttpServiceFactory} from './services/authHttpServiceFactory';
import {SearchComponent} from './components/search/search.component';
import {PostComponent} from './components/post/post.component';
import {UpdatepostComponent} from './components/updatepost/updatepost.component';
import {AuthGuard} from "./guards/auth.guard";
import {SearchService} from "./services/search.service";
import {JoblistService} from "./services/joblist.service";
import {ConvertToArrayPipe} from './pipes/convert-to-array.pipe';
import {ApplyService} from "./services/apply.service"
import {UserinfodialogComponent} from './components/userinfodialog/userinfodialog.component';
import {AgmCoreModule} from "@agm/core";
import {JobService} from "./services/job.service";
import {EmitterService} from "./services/emitter.service";
import {UsersJobHistoryService} from "./services/users-job-history.service";
import {ProfileAppliedJobsComponent} from "./components/profile-applied-jobs/profile-applied-jobs.component";
import {ProfilePostedJobsComponent} from './components/profile-posted-jobs/profile-posted-jobs.component';
import {ConfirmationDialog} from './components/confirmation-dialog/confirmation-dialog.component';
import {JobListProfileService} from "./services/job-list-profile.service";
import {ApproveUserService} from "./services/approve-user.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    SearchComponent,
    PostComponent,
    UpdatepostComponent,
    UserinfodialogComponent,
    ConvertToArrayPipe,
    ProfileAppliedJobsComponent,
    ProfilePostedJobsComponent,
    ConfirmationDialog
  ],
  imports: [
    BrowserModule,
    Routing,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdDatepickerModule, MdNativeDateModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBVIWPDjmmXhytVwdDsthBQAB_TTZixCic",
      libraries: ["places"]
    })
  ],
  providers: [AppRoutingProviders, {
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]
  },
    AuthService,
    SearchService,
    AuthGuard,
    JoblistService,
    JobService,
    ApplyService,
    EmitterService,
    UsersJobHistoryService,
    JobListProfileService,
    ApproveUserService
  ],

  entryComponents: [
    UpdatepostComponent,
    UserinfodialogComponent,
    ConfirmationDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
