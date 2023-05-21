import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilmsDataService } from '../films-data/films-data.service';
import { LogerService } from '../../logerService/loger.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css'],
})
export class AddFilmComponent implements OnInit {
  movieForm!: FormGroup;

  URL_REGEXP = /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/;

  constructor(
    private formBuilder: FormBuilder,
    private filmsData: FilmsDataService,
    private logService: LogerService,
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.movieForm = this.formBuilder.group({
      title: ['', Validators.required],
      genre: [''],
      releaseDate: [''],
      image: ['', [Validators.required, Validators.pattern(this.URL_REGEXP)]],
    });
  }

  onSubmit() {
    if (this.movieForm.invalid) {
      return;
    }
    if (this.movieForm.value.genre) {
      this.movieForm.value.genre = this.movieForm.value.genre.split(', ');
    } else {
      this.movieForm.value.genre = [' '];
    }
    const movieData = {
      ...this.movieForm.value,
      id: '',
      description: '',
      imdb_rating: 0,
      actors: [''],
      release_date: '',
      director: '',
      duration_ms: 0,
      language: '',
      country: '',
    };

    this.logService.loger('добавлен фильм', movieData.title);
    this.filmsData.add = movieData;
    this.movieForm.reset();
  }
}
