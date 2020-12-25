import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowmoredialogComponent } from './knowmoredialog.component';

describe('KnowmoredialogComponent', () => {
  let component: KnowmoredialogComponent;
  let fixture: ComponentFixture<KnowmoredialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowmoredialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowmoredialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
