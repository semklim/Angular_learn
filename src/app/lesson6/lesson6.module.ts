import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Lesson6Component } from './lesson6.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { DelFilmComponent } from './del-film/del-film.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmsSectionComponent } from './films-section/films-section.component';

@NgModule({
  declarations: [Lesson6Component, AddFilmComponent, DelFilmComponent, FilmsListComponent, FilmsSectionComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [],
  exports: [Lesson6Component],
})
export class Lesson6Module {}
