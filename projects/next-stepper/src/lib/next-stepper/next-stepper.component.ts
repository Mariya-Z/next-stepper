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
  public passiveSteps = [];
  // public checkedSteps = [true, false, false];
  public disabledSteps;


  // public get activeSteps(): boolean[] {
  //   this.disabledSteps.forEach((v, i) => (this.activeSteps[i] = !this.disabledSteps[i]));
  //   return this.activeSteps;
  // }

  @Input() private checked: number;

  public ngOnInit(): void {
    // console.log(this.steps);
    // console.log(this.checkedSteps);
    this.activeSteps = this.steps.map(() => false);
    this.disabledSteps = this.steps.forEach((item) => !item.allowTransition);
    if (this.checked >= 0) {
      this.activeSteps[this.checked] = true;
      // for (let i = 0; i <= this.checked; ++i) {
      //   this.disabledSteps[i] = false;
      // }
      this.activeSteps[0] = false;
      this.activeSteps[this.checked] = true;
    } else {
      this.activeSteps[0] = true;
    }
  }

  public onClick(i: number): void {
    // if (this.disabledSteps[i] === false) {
    //   this.checkedSteps.forEach((v, j) => {
    //     this.checkedSteps[j] = false;
    //   });
    //   this.checkedSteps[i] = true;
    // }
  }

  // public next(): void {
  //   const i = this.checkedSteps.indexOf(true);
  //   if (i < 2) {
  //     this.checkedSteps[i] = false;
  //     this.checkedSteps[i + 1] = true;
  //     this.disabledSteps[i + 1] = false;
  //   }
  // }
}
