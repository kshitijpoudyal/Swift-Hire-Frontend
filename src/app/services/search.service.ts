import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import "rxjs/add/operator/map";
import {AuthService} from "./auth.service";
import {AuthHttp} from "angular2-jwt";
import {ServiceUrls} from "../models/ServiceUrls";

@Injectable()
export class SearchService {

  constructor(public http: Http, public auth: AuthService, public authHttp: AuthHttp) {
  }

  searchJobs(searchQuery, category, location, minFees) {

    let id = this.auth.getUser().identities[0].user_id;

    let params = {
      'searchQuery': searchQuery ? searchQuery : '',
      'category': category ? category : '',
      'location': location ? location : '',
      'minFees': minFees ? minFees : 0
    };

    return this.http.get(ServiceUrls.JOB_SEARCH_URL + id, {search: params})
      .map(res => res.json());
  }

}
