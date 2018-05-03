import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksAdminModalComponent } from './links-admin-modal.component';

describe('LinksAdminModalComponent', () => {
  let component: LinksAdminModalComponent;
  let fixture: ComponentFixture<LinksAdminModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksAdminModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksAdminModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
