import { Component } from '@angular/core';
import { FilmsDataService } from '../films/films-data.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css'],
})
export class FilmsListComponent {
  constructor(public filmsData: FilmsDataService) {}

  msToTime(duration: number): string {
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    minutes = minutes < 10 ? 0 + minutes : minutes;
    hours = hours < 10 ? 0 + hours : hours;

    return `${hours}:${minutes}`;
  }
}
