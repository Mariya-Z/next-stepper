import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NextStepperComponent} from './next-stepper.component';
import {Component, NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('NextStepperComponent', () => {
  let component: NextStepperComponent;
  let fixture: ComponentFixture<NextStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NextStepperComponent],
    }).compileComponents();
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

describe('NextStepperHostComponent', () => {
  let component: NextStepperHostComponent;
  let fixture: ComponentFixture<NextStepperHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NextStepperHostComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextStepperHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show step names', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const de = fixture.debugElement.query(By.css('.next-stepper'));
      console.log(de.nativeElement);
      expect(de.nativeElement.textContent).toBe('firstStep');
    });
  });
});

@Component({
  template: `
    <next-stepper
      [firstStep]="'firstStep'"
      [firstChecked]="firstChecked"
      [firstDisabled]="firstDisabled"
      [secondStep]="'secondStep'"
      [secondChecked]="secondChecked"
      [secondDisabled]="secondDisabled"
      [thirdStep]="'thirdStep'"
      [thirdChecked]="thirdChecked"
      [thirdDisabled]="thirdDisabled"
    ></next-stepper>
  `,
})
class NextStepperHostComponent {
  public firstChecked = true;
  public firstDisabled = false;
  public secondChecked = false;
  public secondDisabled = true;
  public thirdChecked = false;
  public thirdDisabled = true;
}
