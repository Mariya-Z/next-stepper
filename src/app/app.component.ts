import {Component, ViewChild} from '@angular/core';
import {NextStepperComponent} from 'next-stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public checked = 1;

  public steps = [
    {id: '1', name: 'firstStep', allowTransition: true},
    {id: '3', name: 'secondStep', allowTransition: true},
    {id: '2', name: 'thirdStep', allowTransition: false},
    {id: '4', name: 'fouthStep', allowTransition: true},
  ];

  @ViewChild(NextStepperComponent) public stepper: NextStepperComponent;

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
