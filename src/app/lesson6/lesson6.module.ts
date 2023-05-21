import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFilmComponent } from './add-film/add-film.component';
import { DelFilmComponent } from './del-film/del-film.component';
import { FilmComponent } from './film/film.component';
import { FilmsSectionComponent } from './films-section/films-section.component';

@NgModule({
  declarations: [AddFilmComponent, DelFilmComponent, FilmComponent, FilmsSectionComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [],
  exports: [FilmsSectionComponent],
})
export class Lesson6Module {}
