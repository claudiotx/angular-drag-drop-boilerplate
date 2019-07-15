import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrettyElementComponent } from './pretty-element.component';

describe('PrettyElementComponent', () => {
  let component: PrettyElementComponent;
  let fixture: ComponentFixture<PrettyElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrettyElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrettyElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
