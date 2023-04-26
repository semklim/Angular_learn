import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
	dateDay = 0;
	dateHour = 0;
	dateMinute = 0;
	title = 'AngularLesson';
	date: Date;
	constructor(){
			this.date = new Date();
			this.dateDay = this.date.getDate();
			this.dateHour = this.date.getHours();
			this.dateMinute = this.date.getMinutes();
	}
}