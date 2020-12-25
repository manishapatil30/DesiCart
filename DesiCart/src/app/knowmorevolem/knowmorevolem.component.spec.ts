import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowmorevolemComponent } from './knowmorevolem.component';

describe('KnowmorevolemComponent', () => {
  let component: KnowmorevolemComponent;
  let fixture: ComponentFixture<KnowmorevolemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowmorevolemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowmorevolemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
