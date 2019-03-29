## Example of allowTransition values

If step can be visited just by ckick on it name, `allowTransition` should be true

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
    [steps]=stepsWithTransition
></next-stepper>
<button (click)="onClick()" class="submit-btn">Next step</button>
```

Where `stepsWithTransition` is 

```

stepsWithTransition = [
  {id: '1', name: 'firstStep', allowTransition: true},
  {id: '3', name: 'secondStep', allowTransition: false},
  {id: '2', name: 'thirdStep', allowTransition: true},
  {id: '4', name: 'fouthStep', allowTransition: false},
  {id: '5', name: 'fifthStep', allowTransition: true},
];
```
