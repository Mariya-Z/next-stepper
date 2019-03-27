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
    {id: '2', name: 'thirdStep', allowTransition: true},
    {id: '4', name: 'fouthStep', allowTransition: true},
  ];

  @ViewChild(NextStepperComponent) public stepper: NextStepperComponent;

  public onClick(): void {
    this.stepper.next();
  }
}
