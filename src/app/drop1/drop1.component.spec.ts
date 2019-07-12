import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Drop1Component } from './drop1.component';

describe('Drop1Component', () => {
  let component: Drop1Component;
  let fixture: ComponentFixture<Drop1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Drop1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Drop1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
