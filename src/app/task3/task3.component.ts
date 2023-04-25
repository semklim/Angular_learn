import { Component } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class User {
  title = 'AngularLesson';
  name: string;
  age: number;
  phone: number;
  constructor(){
	this.name = "Roma";
	this.age = 26;
	this.phone = 2123;
  }
}
