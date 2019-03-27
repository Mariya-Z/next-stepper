import {Component, Input, OnInit} from '@angular/core';
// import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

interface Step {
  id: string;
  name: string;
  allowTransition: boolean;
}

@Component({
  selector: 'next-stepper',
  templateUrl: './next-stepper.component.html',
  styleUrls: ['./next-stepper.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NextStepperComponent implements OnInit {
  @Input() public steps: Step[] = [];

  public activeSteps = [];
  public disabledSteps;

  public get passiveSteps(): boolean[] {
    this.disabledSteps.forEach((v, i) => (this.passiveSteps[i] = !this.disabledSteps[i]));
    return this.passiveSteps;
  }

  @Input() private checked: number;

  public ngOnInit(): void {
    this.activeSteps = this.steps.map(() => false);
    this.disabledSteps = this.steps.map(() => true);
    if (this.checked >= 0) {
      this.activeSteps[this.checked] = true;
      for (let i = 0; i <= this.checked; ++i) {
        this.disabledSteps[i] = false;
      }
    } else {
      this.activeSteps[0] = true;
      this.disabledSteps[0] = false;
    }
  }

  public onClick(i: number): void {
    if (this.disabledSteps[i] === false) {
      this.activeSteps.forEach((v, j) => {
        this.activeSteps[j] = false;
      });
      this.activeSteps[i] = true;
    }
  }

  public next(): void {
    const i = this.activeSteps.indexOf(true);
    if (i < this.steps.length) {
      this.activeSteps[i] = false;
      this.activeSteps[i + 1] = true;
      this.disabledSteps[i + 1] = false;
    }
  }
}
