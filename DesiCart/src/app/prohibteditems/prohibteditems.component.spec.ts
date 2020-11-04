import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProhibteditemsComponent } from './prohibteditems.component';

describe('ProhibteditemsComponent', () => {
  let component: ProhibteditemsComponent;
  let fixture: ComponentFixture<ProhibteditemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProhibteditemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProhibteditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
