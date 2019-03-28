import {Component, Input, OnInit} from '@angular/core';

interface Step {
  id: string;
  name: string;
  allowTransition: boolean;
}

@Component({
  selector: 'next-stepper',
  templateUrl: './next-stepper.component.html',
  styleUrls: ['./next-stepper.component.scss'],
})
export class NextStepperComponent implements OnInit {
  @Input() public steps: Step[];
  @Input() public changePassiveSteps = true;

  public activeSteps = [];
  public passiveSteps = [];

  @Input() private active: number = 0;

  public ngOnInit(): void {
    this.activeSteps = this.steps.map(() => false);
    this.passiveSteps = this.steps.map((item) => item.allowTransition);
    if (this.active >= 0) {
      this.activeSteps[this.active] = true;
      this.passiveSteps[this.active] = true;
    } else {
      this.activeSteps[0] = true;
      this.passiveSteps[0] = true;
    }
  }

  public onClick(i: number): void {
    if (this.passiveSteps[i]) {
      const j = this.activeSteps.indexOf(true);
      this.activeSteps[j] = false;
      this.activeSteps[i] = true;
    }
  }

  public next(): void {
    const i = this.activeSteps.indexOf(true);
    if (i < this.steps.length - 1) {
      this.activeSteps[i] = false;
      this.activeSteps[i + 1] = true;
      if (this.changePassiveSteps) {
        this.passiveSteps[i + 1] = true;
      }
    }
  }
}
