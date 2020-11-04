import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TosisComponent } from './tosis.component';

describe('TosisComponent', () => {
  let component: TosisComponent;
  let fixture: ComponentFixture<TosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
