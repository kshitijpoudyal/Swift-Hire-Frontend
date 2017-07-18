import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import "rxjs/add/operator/map";
import {AuthService} from "./auth.service";
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class SearchService {

  constructor(public http: Http, public auth: AuthService, public authHttp: AuthHttp) {
  }

  searchJobs(searchQuery, category, location, minFees) {

    let params = {
      'searchQuery': searchQuery,
      'category': category,
      'location': location,
      'minFees': minFees
    };

    return this.authHttp.get("http://localhost:8080/job/search", {search: params})
      .map(res => res.json());
  }

}
