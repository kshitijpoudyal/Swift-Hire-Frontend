import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePostedJobsComponent } from './profile-posted-jobs.component';

describe('ProfilePostedJobsComponent', () => {
  let component: ProfilePostedJobsComponent;
  let fixture: ComponentFixture<ProfilePostedJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePostedJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePostedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
