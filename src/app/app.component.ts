import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public firstChecked = true;
  public firstDisabled = false;
  public secondChecked = false;
  public secondDisabled = true;
  public thirdChecked = false;
  public thirdDisabled = true;

  public onClick(): void {
    if (this.firstChecked) {
      this.firstChecked = !this.firstChecked;
      this.secondChecked = !this.secondChecked;
      this.secondDisabled = !this.secondDisabled;
    } else if (this.secondChecked) {
      this.secondChecked = !this.secondChecked;
      this.thirdChecked = !this.thirdChecked;
      this.thirdDisabled = !this.thirdDisabled;
    } else {
      this.firstChecked = true;
      this.firstDisabled = false;
      this.secondChecked = false;
      this.secondDisabled = true;
      this.thirdChecked = false;
      this.thirdDisabled = true;
    }
  }
}
