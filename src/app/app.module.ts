import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
// lesson1
import { Task1Component } from './lesson1/task1/task1.component';
import { Task2Component } from './lesson1/task2/task2.component';
import { User } from './lesson1/task3/task3.component';
// lesson2
import { TelegramComponent } from './lesson2/socials/telegram/telegram.component';
import { InstagramComponent } from './lesson2/socials/instagram/instagram.component';
import { SocialsComponent } from './lesson2/socials/socials.component';
import { ButtonClickerComponent } from './lesson2/button-clicker/button-clicker.component';
import { MangoComponent } from './lesson2/mango/mango.component';
@NgModule({
  declarations: [
	MainComponent,
	//lesson1
    Task1Component,
	Task2Component,
	User,
	//lesson2
	SocialsComponent,
	TelegramComponent,
	InstagramComponent,
	ButtonClickerComponent,
	MangoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }