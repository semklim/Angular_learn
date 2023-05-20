import { Component, Input } from '@angular/core';
import { Film } from 'src/app/types/films/films.type';
import { FilmsDataService } from '../films/films-data.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css'],
})
export class FilmsListComponent {
  @Input() film: Film = {
    id: '',
    title: '',
    description: '',
    imdb_rating: 8.8,
    actors: [''],
    release_date: '',
    image: '',
    genre: [''],
    director: '',
    duration_ms: 8880000,
    language: '',
    country: '',
  };

  constructor(public filmsData: FilmsDataService) {}

  msToTime(duration: number): string {
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    minutes = minutes < 10 ? 0 + minutes : minutes;
    hours = hours < 10 ? 0 + hours : hours;

    return `${hours}:${minutes}`;
  }
}
