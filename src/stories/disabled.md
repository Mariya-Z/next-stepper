## Using changePassiveSteps input

If disabled steps should never be visited next button should become disabled

It can be done in app:

```
export class AppComponent {
    @ViewChild(NextStepperComponent) public stepper: NextStepperComponent;
    ...
    public onClick(): void {
        this.stepper.next();
    }

    public isDisabled(): boolean {
    const j = this.stepper.activeSteps.indexOf(true);
    if (this.stepper.passiveSteps[j + 1]) {
      return false;
    }
    return true;
  }
}
```

### Tempalte for this example looks like code below

```
<style>
.submit-btn {
    background-color: #0460a9;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: block;
    margin: 20px 0;
    font-size: 16px;
    cursor: pointer;
    user-select: none;
}
</style>

<next-stepper
    [steps]=disabledSteps
    [checked]=1
></next-stepper>
<button (click)="onClick()" class="submit-btn" [disabled]="isDisabled()">Next step</button>
```

Where `disabledSteps` is 

```
export const disabledSteps = [
  {id: '1', name: 'firstStep', allowTransition: true},
  {id: '3', name: 'secondStep', allowTransition: true},
  {id: '2', name: 'thirdStep', allowTransition: false},
  {id: '4', name: 'fouthStep', allowTransition: true},
];
```
