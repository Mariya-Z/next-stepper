import {storiesOf, moduleMetadata} from '@storybook/angular';

import defaultText from './default.md';
import transitionText from './transition.md';
import checkedText from './checked.md';

import {NextStepperComponent} from '../../projects/next-stepper/src/public_api';
import {ViewChild, Component, Input} from '@angular/core';

export const simpleSteps = [
  {id: '1', name: 'firstStep', allowTransition: true},
  {id: '3', name: 'secondStep', allowTransition: false},
  {id: '2', name: 'thirdStep', allowTransition: false},
  {id: '4', name: 'fouthStep', allowTransition: false},
];

export const stepsWithTransition = [
  {id: '1', name: 'firstStep', allowTransition: true},
  {id: '3', name: 'secondStep', allowTransition: false},
  {id: '2', name: 'thirdStep', allowTransition: true},
  {id: '4', name: 'fouthStep', allowTransition: false},
  {id: '5', name: 'fifthStep', allowTransition: true},
];

export const stepsWithChecked = [
  {id: '1', name: 'firstStep', allowTransition: false},
  {id: '3', name: 'secondStep', allowTransition: true},
  {id: '2', name: 'thirdStep', allowTransition: false},
  {id: '4', name: 'fouthStep', allowTransition: false},
];

export const disabledSteps = [
  {id: '1', name: 'firstStep', allowTransition: true},
  {id: '3', name: 'secondStep', allowTransition: true},
  {id: '2', name: 'thirdStep', allowTransition: false},
  {id: '4', name: 'fouthStep', allowTransition: true},
];

const styles = `
  <style>
    .submit-btn \{
      background-color: #0460a9;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: block;
      margin: 20px 0;
      font-size: 16px;
      cursor: pointer;
      user-select: none;
    \}
    .submit-btn:disabled \{
      background-color: #c6c6c6;
      cursor: default;
    \}
  </style>
`;

@Component({
  selector: 'stepper',
  template: `
    ${styles}
    <next-stepper [steps]="steps" [changePassiveSteps]="changePassiveSteps" [active]="checked"></next-stepper>
    <button *ngIf="!disabled" (click)="onClick()" class="submit-btn">Next step</button>
    <button *ngIf="disabled" (click)="onClick()" class="submit-btn" [disabled]="isDisabled()">Next step</button>
  `,
})
export class AppComponent {
  @ViewChild(NextStepperComponent) public stepper: NextStepperComponent;
  @Input() public steps = [];
  @Input() public checked: number;
  @Input() public changePassiveSteps: boolean = true;
  @Input() public disabled: boolean = false;
  public onClick(): void {
    this.stepper.next();
  }
  public isDisabled(): boolean {
    const j = this.stepper.activeSteps.indexOf(true);
    if (this.stepper.passiveSteps[j + 1]) {
      return false;
    }
    return true;
  }
}

storiesOf('Next stepper', module)
  .addDecorator(
    moduleMetadata({
      declarations: [NextStepperComponent, AppComponent],
    }),
  )
  .add(
    'Install',
    () => ({
      template: `
      <stepper
        [steps]=simpleSteps
      >
      </stepper>
      `,
      props: {simpleSteps},
    }),
    {notes: defaultText},
  )
  .add(
    'Steps with allowed transition',
    () => ({
      template: `
      <stepper
        [steps]=stepsWithTransition
      >
      </stepper>
      `,
      props: {stepsWithTransition},
    }),
    {notes: transitionText},
  )
  .add(
    'Stepper with checked input',
    () => ({
      template: `
      <stepper
        [steps]=stepsWithChecked
        [checked]=2
      >
      </stepper>
    `,
      props: {stepsWithChecked},
    }),
    {notes: checkedText},
  )
  .add(
    'Passive steps never become active',
    () => ({
      template: `
      <stepper
        [steps]=stepsWithTransition
        [changePassiveSteps]=false
      >
      </stepper>
      `,
      props: {stepsWithTransition},
    }),
    {notes: checkedText},
  )
  .add(
    'With dsable next btn for passive steps',
    () => ({
      template: `
      <stepper
        [steps]=disabledSteps
        [checked]=1
        [disabled]=true
      >
      </stepper>
      `,
      props: {disabledSteps},
    }),
    {notes: checkedText},
  );
