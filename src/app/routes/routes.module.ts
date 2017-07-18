import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../components/home/home.component";
import {ProfileComponent} from "../components/profile/profile.component";
import {AuthGuard} from "../guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    redirectTo: ''
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    component: ProfileComponent
  }
];

export const AppRoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
