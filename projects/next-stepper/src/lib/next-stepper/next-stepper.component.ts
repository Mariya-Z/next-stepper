import {Component, Input, OnInit} from '@angular/core';
// import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'next-stepper',
  templateUrl: './next-stepper.component.html',
  styleUrls: ['./next-stepper.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NextStepperComponent implements OnInit {
  @Input() public firstStep: string;
  @Input() public secondStep: string;
  @Input() public thirdStep: string;

  public checkedSteps = [true, false, false];
  public disabledSteps = [false, true, true];

  public get activeSteps(): boolean[] {
    this.disabledSteps.forEach((v, i) => (this.activeSteps[i] = !this.disabledSteps[i]));
    return this.activeSteps;
  }

  @Input() private checked: number;

  public ngOnInit(): void {
    if (this.checked >= 0) {
      for (let i = 0; i <= this.checked; ++i) {
        this.disabledSteps[i] = false;
      }
      this.checkedSteps[0] = false;
      this.checkedSteps[this.checked] = true;
    }
  }

  public onClick(i: number): void {
    if (this.disabledSteps[i] === false) {
      this.checkedSteps.forEach((v, j) => {
        this.checkedSteps[j] = false;
      });
      this.checkedSteps[i] = true;
    }
  }

  public next(): void {
    const i = this.checkedSteps.indexOf(true);
    if (i < 2) {
      this.checkedSteps[i] = false;
      this.checkedSteps[i + 1] = true;
      this.disabledSteps[i + 1] = false;
    }
  }
}
