import { NgModule } from '@angular/core';
import { NextStepperComponent } from './next-stepper/next-stepper.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NextStepperComponent],
  imports: [CommonModule],
  exports: [NextStepperComponent],
  entryComponents: [NextStepperComponent],
})
export class NextStepperModule { }
