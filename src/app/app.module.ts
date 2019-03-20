import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NextStepperModule} from 'next-stepper';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NextStepperModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
