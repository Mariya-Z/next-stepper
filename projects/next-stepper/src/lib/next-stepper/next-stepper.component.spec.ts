import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NextStepperComponent} from './next-stepper.component';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('NextStepperComponent', () => {
  let component: NextStepperComponent;
  let componentHost: NextStepperHostComponent;
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
    componentHost = hostFixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show step names', () => {
    const stepsNames = ['firstStep', 'secondStep', 'thirdStep', 'fouthStep'];
    hostFixture.detectChanges();
    hostFixture.whenStable().then(() => {
      const elements = hostFixture.debugElement.queryAll(By.css('.next-stepper__step'));
      const textContents = elements.map((item) => item.nativeElement.textContent);
      expect(textContents).toEqual(stepsNames);
    });
  });

  it('should set necessary classes', () => {
    hostFixture.detectChanges();
    hostFixture.whenStable().then(() => {
      const elements = hostFixture.debugElement.queryAll(By.css('.next-stepper__step'));
      expect(elements[0].nativeElement.className).toContain('passive');

      expect(elements[1].nativeElement.className).toContain('active');

      expect(elements[2].nativeElement.className).toContain('disabled');

      expect(elements[3].nativeElement.className).toContain('passive');

      expect(componentHost.activeSteps[1]).toBeTruthy();
      expect(componentHost.passiveSteps[1]).toBeTruthy();
    });
  });

  it('should move on step by click on next', () => {
    hostFixture.detectChanges();
    componentHost.next();
    hostFixture.detectChanges();
    hostFixture.whenStable().then(() => {
      expect(componentHost.activeSteps[1]).toBeFalsy();
      expect(componentHost.activeSteps[2]).toBeTruthy();
    });
  });

  it('should move on step by click on step name', () => {
    hostFixture.detectChanges();
    componentHost.onClick(3);
    hostFixture.detectChanges();
    hostFixture.whenStable().then(() => {
      expect(componentHost.activeSteps[1]).toBeFalsy();
      expect(componentHost.activeSteps[3]).toBeTruthy();
    });
  });
});

@Component({
  template: `
    <next-stepper [steps]="steps" [active]="active"></next-stepper>
  `,
})
class NextStepperHostComponent extends NextStepperComponent {
  public active = 1;
  public steps = [
    {id: '1', name: 'firstStep', allowTransition: true},
    {id: '2', name: 'secondStep', allowTransition: true},
    {id: '3', name: 'thirdStep', allowTransition: false},
    {id: '4', name: 'fouthStep', allowTransition: true},
  ];
}
