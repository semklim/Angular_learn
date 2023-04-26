import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Task1Component } from './lesson1/task1/task1.component';
import { Task2Component } from './lesson1/task2/task2.component';
import { User } from './lesson1/task3/task3.component';

@NgModule({
  declarations: [
    Task1Component,
	Task2Component,
	User
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [Task2Component, Task1Component, User]
})
export class AppModule { }
