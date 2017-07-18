import {AuthConfig, AuthHttp} from "angular2-jwt";
import {Http, RequestOptions} from "@angular/http";
/**
 * Created by Sulav on 7/16/17.
 */
export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    tokenGetter: (() => localStorage.getItem('token')),
    globalHeaders: [{'Content-Type': 'application/json'}],
  }), http, options);
}
