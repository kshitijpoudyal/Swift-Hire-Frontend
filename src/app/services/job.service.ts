import {Injectable} from '@angular/core';
import {AuthService} from "./auth.service";
import {AuthHttp} from "angular2-jwt";
import {Http} from "@angular/http";

@Injectable()
export class JobService {

  constructor(public http: Http, public authHttp: AuthHttp, public auth: AuthService) {

  }

  add(formData, addressControl, longitude, latitude) {

    let profile = this.auth.getUser();

    let userInfo = {
      _id: profile.identities[0].user_id,
      name: profile.name,
      email: profile.email,
      picture: profile.picture
    };

    let jobInfo = {
      title: formData.controls['title'].value,
      category: formData.controls['category'].value,
      preferredDate: formData.controls['preferedDate'].value,
      preferredTime: formData.controls['preferedTime'].value,
      duration: formData.controls['duration'].value,
      hourlyRate: formData.controls['hourlyRate'].value,
      description: formData.controls['description'].value,
      location: {
        address: addressControl.value,
        coords: [longitude, latitude]
      }
    };

    return this.http.post('http://localhost:8080/job/add', {userInfo, jobInfo}).map(res => res.json());
  }

}
