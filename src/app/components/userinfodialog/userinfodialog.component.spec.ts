import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfodialogComponent } from './userinfodialog.component';

describe('UserinfodialogComponent', () => {
  let component: UserinfodialogComponent;
  let fixture: ComponentFixture<UserinfodialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserinfodialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinfodialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
