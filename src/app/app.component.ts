import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public thirdDisabled = false;

  public onClick(): void {
    this.thirdDisabled = !this.thirdDisabled;
  }
}
