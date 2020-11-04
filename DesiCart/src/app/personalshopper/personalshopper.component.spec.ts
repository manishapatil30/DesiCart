import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalshopperComponent } from './personalshopper.component';

describe('PersonalshopperComponent', () => {
  let component: PersonalshopperComponent;
  let fixture: ComponentFixture<PersonalshopperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalshopperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalshopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
