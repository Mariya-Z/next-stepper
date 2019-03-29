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
Stepper displays progress through a sequence of steps. Steps are passed through input. Each step can be in one of three state `active` (blue background) it's current step. `passive` (light blue background) is step that can be visited by click. And `disabled` (gray backgroud) is step that can't be visited by click in most cases it can be visited after fullfil some conditions (here by click on next button). User is able to move between active and passive steps by click on their names

It has three inputs that let set steps and optional parametrs:

- `steps`
- `changePassiveSteps`
- `active`

`steps` is array of necessary steps, where each step has to look like this: 

```
  id: string;
  name: string;
  allowTransition: boolean;
```

`allowTransition` tells can user visit this step by click on it or not.

`changePassiveSteps` is optional. By default it's true. Disabled step becomes passive after it has been visited  (light blue background). If input is false it won't become blue light

`active` is also optional input, this is index of active step. It's number form 0 to steps array length. By default it's first step (0).

Component has function `next()` that lets move on next step. Decorator @ViewChild is used to get this function in app

```
export class AppComponent {
    @ViewChild(NextStepperComponent) public stepper: NextStepperComponent;
    ...
    public onClick(): void {
        this.stepper.next();
    }
}
```

## Tempalte for this example looks like code below

```
<next-stepper
  [steps]="steps"
></next-stepper>
<button (click)="onClick()" class="submit-btn">Next step</button>
```
Where steps are described in component

```
steps = [
  {id: '1', name: 'firstStep', allowTransition: true},
  {id: '3', name: 'secondStep', allowTransition: false},
  {id: '2', name: 'thirdStep', allowTransition: false},
  {id: '4', name: 'fouthStep', allowTransition: false},
]
```