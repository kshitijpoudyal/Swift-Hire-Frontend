
import {Component, OnInit, ViewChild, ElementRef, NgZone, EventEmitter} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MdDialogRef, MdNativeDateModule, MdDatepickerModule} from "@angular/material";
import {FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators, FormControl} from "@angular/forms";
import {MapsAPILoader} from '@agm/core';
import {} from'@types/googlemaps';
import {JobService} from "../../services/job.service";
import {EmitterService} from "../../services/emitter.service";

@Component({
  selector: 'app-updatepost',
  templateUrl: './updatepost.component.html',
  styleUrls: ['./updatepost.component.css']
})
export class UpdatepostComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public add: string;
  //jobUpdated: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild("search")

  public searchElementRef: ElementRef;
  postedBy;
  public addPostForm: FormGroup;

  constructor(public auth: AuthService, public fb: FormBuilder,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone, public jobService: JobService, public emitter: EmitterService) {
    this.createForm();

  }

  createForm(): any {
    this.addPostForm = this.fb.group(
      {
        'title': ['', Validators.required],
        'description': ['', Validators.required],
        'category': ['', Validators.required],
        'duration': ['', Validators.required],
        'hourlyRate': ['', Validators.required],
        'preferredDate': ['', Validators.required],
        'preferredTime': ['', Validators.required],
        'postedBy': [this.postedBy],
        'locations': {
          address: [],
          coords: []
        }
      });
  }

  onSubmit() {
    this.jobService.add(this.addPostForm, this.add, this.longitude, this.latitude).subscribe(data => {
      if(data.job){
        console.log("response data:"+data.job);
        this.emitter.setEventEmitter(data.job);
      }else{
        console.log("Job Not Added!!");
      }

    });

  }

  ngOnInit() {
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
          this.add = place.formatted_address;

        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}
