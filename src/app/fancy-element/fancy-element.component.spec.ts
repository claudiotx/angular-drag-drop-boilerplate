import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyElementComponent } from './fancy-element.component';

describe('FancyElementComponent', () => {
  let component: FancyElementComponent;
  let fixture: ComponentFixture<FancyElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FancyElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
