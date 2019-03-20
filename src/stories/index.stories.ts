import {storiesOf, moduleMetadata} from '@storybook/angular';

import defaultText from './default.md';
import checkedText from './checked.md';

import {NextStepperComponent} from '../../projects/next-stepper/src/public_api';
import {ViewChild, Component, Input} from '@angular/core';

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
    \}
  </style>
`;
@Component({
  selector: 'stepper',
  template: `
    ${styles}
    <next-stepper
      [firstStep]="'firstStep'"
      [secondStep]="'secondStep'"
      [thirdStep]="'thirdStep'"
      [checked]="checked"
    ></next-stepper>
    <button (click)="onClick()" class="submit-btn">Next step</button>
  `,
})
export class AppComponent {
  @ViewChild(NextStepperComponent) public stepper: NextStepperComponent;
  @Input() public checked: number;
  public onClick(): void {
    this.stepper.next();
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
      component: AppComponent,
    }),
    {notes: defaultText},
  )
  .add(
    'Using checked input',
    () => ({
      template: `
      <stepper [checked]=1></stepper>
    `,
    }),
    {notes: checkedText},
  );
