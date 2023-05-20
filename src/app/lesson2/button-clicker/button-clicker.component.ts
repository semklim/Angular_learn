import { Component } from '@angular/core';

@Component({
  selector: 'app-button-clicker',
  templateUrl: './button-clicker.component.html',
  styleUrls: ['./button-clicker.component.css'],
})
export class ButtonClickerComponent {
  count = 0;

  state = false;

  onClick() {
    this.count += 1;
    if (this.count > 3) {
      this.state = true;
    }
  }

  constructor() {
    setInterval(() => {
      this.count = 0;
      this.state = false;
    }, 2000);
  }
}
