import { Component } from '@angular/core';
import { Task1Component } from '../task1/task1.component';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css'],
})
export class Task2Component extends Task1Component {
  idInterval: ReturnType<typeof setInterval>;

  dateSecond!: number;

  constructor() {
    super();
    this.idInterval = setInterval(() => {
      const date = new Date();
      this.dateDay = date.getDate();
      this.dateHour = date.getHours();
      this.dateMinute = date.getMinutes();
      this.dateSecond = date.getSeconds();
    }, 1000);
  }
}
