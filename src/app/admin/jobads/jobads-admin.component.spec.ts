import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobadsAdminComponent } from './jobads-admin.component';

describe('JobadsAdminComponent', () => {
  let component: JobadsAdminComponent;
  let fixture: ComponentFixture<JobadsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobadsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobadsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
