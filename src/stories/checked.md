## Using checked input

If checked step should be not first, it's can be defined de input parametr checked

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
}
</style>

<next-stepper
    [firstStep]="'firstStep'"
    [secondStep]="'secondStep'"
    [thirdStep]="'thirdStep'"
    [checked]="1"
></next-stepper>
<button (click)="onClick()" class="submit-btn">Next step</button>
```