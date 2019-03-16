import { Component, Input } from '@angular/core';
// import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'next-stepper',
  templateUrl: './next-stepper.component.html',
  styleUrls: ['./next-stepper.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,

})
export class NextStepperComponent {
  @Input() public firstStep: string;
  @Input() public firstChecked: boolean;
  @Input() public firstDisabled: boolean;
  @Input() public secondStep: string;
  @Input() public secondChecked: boolean;
  @Input() public secondDisabled: boolean;
  @Input() public thirdStep: string;
  @Input() public thirdChecked: boolean;
  @Input() public thirdDisabled: boolean;


}
