import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingservicesComponent } from './pricingservices.component';

describe('PricingservicesComponent', () => {
  let component: PricingservicesComponent;
  let fixture: ComponentFixture<PricingservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
