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
import {MaterialModule, MdDialog, MdDialogModule} from '@angular/material';
import {AuthService} from './services/auth.service';
import {authHttpServiceFactory} from './services/authHttpServiceFactory';
import {SearchComponent} from './components/search/search.component';
import {PostComponent} from './components/post/post.component';
import {UpdatepostComponent} from './components/updatepost/updatepost.component';
import {AuthGuard} from "./guards/auth.guard";
import {SearchService} from "./services/search.service";
import {UserinfodialogComponent} from './components/userinfodialog/userinfodialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    SearchComponent,
    PostComponent,
    UpdatepostComponent,
    UserinfodialogComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [AppRoutingProviders, {
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]
  }, AuthService, SearchService, AuthGuard],

  entryComponents: [
    UpdatepostComponent,
    UserinfodialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
