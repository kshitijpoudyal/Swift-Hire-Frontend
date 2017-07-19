import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAppliedJobsComponent } from './profile-applied-jobs.component';

describe('ProfileAppliedJobsComponent', () => {
  let component: ProfileAppliedJobsComponent;
  let fixture: ComponentFixture<ProfileAppliedJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAppliedJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAppliedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
