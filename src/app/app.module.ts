import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
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
import { SvgComponent } from './lesson3/svg/svg.component';
import { Task0Component } from './lesson3/task0/task0.component';
import { FormsModule } from '@angular/forms';
// lesson3
import { UserComponent } from './lesson4/user/user.component';
import { AvatarComponent } from './lesson4/user/avatar/avatar.component';
import { AvatarSettingsComponent } from './lesson4/user/avatar-settings/avatar-settings.component';
// lesson4
import { OpenedSocialsComponent } from './lesson5/opened-socials/opened-socials.component';
import { SocialModule } from './lesson5/social/social.module';

@NgModule({
  declarations: [
	AppComponent,
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
  //lesson 3
  SvgComponent,
  Task0Component,
  UserComponent,
  AvatarComponent,
  AvatarSettingsComponent,
  // lesson 4
  OpenedSocialsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  //  lesson 4
    SocialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
