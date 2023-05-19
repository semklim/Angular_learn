import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lesson6Component } from './lesson6.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFilmComponent } from './add-film/add-film.component';



@NgModule({
  declarations: [
    Lesson6Component,
    AddFilmComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [Lesson6Component]
})
export class Lesson6Module { }
