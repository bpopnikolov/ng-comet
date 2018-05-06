import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobadAdminModalComponent } from './jobad-admin-modal.component';

describe('CreateJobadComponent', () => {
  let component: JobadAdminModalComponent;
  let fixture: ComponentFixture<JobadAdminModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobadAdminModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobadAdminModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
