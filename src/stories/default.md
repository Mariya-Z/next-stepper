## Project setup

```
npm i next-stepper
```

## Basic usage example

### Add module into your app

```
import {NextStepperModule} from 'next-stepper';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NextStepperModule
  ],
})
export class AppModule {}
```

### Add markup to the template

```
<next-stepper>
</next-stepper>
```
Stepper displays progress through a sequence of steps. It has three steps. Each step can be in one of three state `checked` (blue background) it's current step. `active` (light blue background) is step that has been visited before. And `disabled` (gray backgroud) is step that can be visited after fullfil some conditions. User is able to move between active and cheched steps by click on their names

It has three inputs that let set names for steps:

- `firstStep`
- `secondStep`
- `thirdStep`

Also component has optional input `checked` that points on active step. It's number form 0 to 2. By defaylt it's first step (0).

Component has function `next()` that lets move on next disabled step. Decorator @ViewChild is used to get this function 

```
export class AppComponent {
    @ViewChild(NextStepperComponent) public stepper: NextStepperComponent;
    ...
    newFunc() {
        this.stepper.next();
    }
}
```

## Tempalte for this example looks like code below

```
<next-stepper
    [firstStep]="'firstStep'"
    [secondStep]="'secondStep'"
    [thirdStep]="'thirdStep'"
></next-stepper>
<button (click)="onClick()" class="submit-btn">Next step</button>
```
