import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceopendialogComponent } from './priceopendialog.component';

describe('PriceopendialogComponent', () => {
  let component: PriceopendialogComponent;
  let fixture: ComponentFixture<PriceopendialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceopendialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceopendialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
