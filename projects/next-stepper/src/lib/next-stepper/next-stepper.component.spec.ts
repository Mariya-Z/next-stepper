import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextStepperComponent } from './next-stepper.component';

describe('NextStepperComponent', () => {
  let component: NextStepperComponent;
  let fixture: ComponentFixture<NextStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
