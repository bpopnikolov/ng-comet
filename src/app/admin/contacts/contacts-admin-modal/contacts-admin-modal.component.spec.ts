import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsAdminModalComponent } from './contacts-admin-modal.component';

describe('ContactsAdminModalComponent', () => {
  let component: ContactsAdminModalComponent;
  let fixture: ComponentFixture<ContactsAdminModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsAdminModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsAdminModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
