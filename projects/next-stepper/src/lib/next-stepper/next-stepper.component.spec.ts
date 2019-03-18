import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NextStepperComponent} from './next-stepper.component';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('NextStepperComponent', () => {
  let component: NextStepperComponent;
  let fixture: ComponentFixture<NextStepperComponent>;
  let hostFixture: ComponentFixture<NextStepperHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NextStepperComponent, NextStepperHostComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    hostFixture = TestBed.createComponent(NextStepperHostComponent);
    fixture = TestBed.createComponent(NextStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show step names', () => {
    hostFixture.detectChanges();
    hostFixture.whenStable().then(() => {
      let element = hostFixture.debugElement.query(By.css('.first-step .step-title'));
      expect(element.nativeElement.textContent).toBe('firstStep');

      element = hostFixture.debugElement.query(By.css('.second-step .step-title'));
      expect(element.nativeElement.textContent).toBe('secondStep');

      element = hostFixture.debugElement.query(By.css('.third-step .step-title'));
      expect(element.nativeElement.textContent).toBe('thirdStep');
    });
  });

  it('should set necessary classes', () => {
    hostFixture.detectChanges();
    hostFixture.whenStable().then(() => {
      let element = hostFixture.debugElement.query(By.css('.first-step'));
      expect(element.nativeElement.className).toContain('checked', 'active');

      element = hostFixture.debugElement.query(By.css('.second-step'));
      expect(element.nativeElement.className).toContain('disabled');

      element = hostFixture.debugElement.query(By.css('.third-step'));
      expect(element.nativeElement.className).toContain('disabled');
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
