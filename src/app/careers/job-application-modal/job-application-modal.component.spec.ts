import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationModalComponent } from './job-application-modal.component';

describe('JobApplicationModalComponent', () => {
  let component: JobApplicationModalComponent;
  let fixture: ComponentFixture<JobApplicationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobApplicationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobApplicationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
