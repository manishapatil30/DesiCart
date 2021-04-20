import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupcalculatorComponent } from './pickupcalculator.component';

describe('PickupcalculatorComponent', () => {
  let component: PickupcalculatorComponent;
  let fixture: ComponentFixture<PickupcalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupcalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
