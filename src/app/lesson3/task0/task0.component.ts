import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson3-task0',
  templateUrl: './task0.component.html',
  styleUrls: ['./task0.component.css'],
})
export class Task0Component {
  tagColor = '#000';

  toggleTask0 = false;

  changeStyle() {
    this.toggleTask0 = !this.toggleTask0;
    this.tagColor = this.randomHsl();
  }

  randomHsl = (): string => `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
}
