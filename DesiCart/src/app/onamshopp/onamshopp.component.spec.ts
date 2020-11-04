import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnamshoppComponent } from './onamshopp.component';

describe('OnamshoppComponent', () => {
  let component: OnamshoppComponent;
  let fixture: ComponentFixture<OnamshoppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnamshoppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnamshoppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
