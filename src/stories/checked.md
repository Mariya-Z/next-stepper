## Using checked input

If checked step should be not first, it's can be defined de input parameter `active`

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
    [steps]=stepsWithChecked
    [checked]=2
></next-stepper>
<button (click)="onClick()" class="submit-btn">Next step</button>
```

Where `stepsWithChecked` is

```

stepsWithChecked = [
  {id: '1', name: 'firstStep', allowTransition: false},
  {id: '3', name: 'secondStep', allowTransition: true},
  {id: '2', name: 'thirdStep', allowTransition: false},
  {id: '4', name: 'fouthStep', allowTransition: false},
];

```