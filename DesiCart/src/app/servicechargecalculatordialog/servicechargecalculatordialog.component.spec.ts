import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicechargecalculatordialogComponent } from './servicechargecalculatordialog.component';

describe('ServicechargecalculatordialogComponent', () => {
  let component: ServicechargecalculatordialogComponent;
  let fixture: ComponentFixture<ServicechargecalculatordialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicechargecalculatordialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicechargecalculatordialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
