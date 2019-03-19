import {Component, ViewChild} from '@angular/core';
import { NextStepperComponent } from 'next-stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public checked = 1;
  @ViewChild(NextStepperComponent) public stepper: NextStepperComponent;

  public onClick(): void {
    this.stepper.next();
  }
}
