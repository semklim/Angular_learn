import { Component, Input } from '@angular/core';
import { Film } from 'src/app/types/films/films.type';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
})
export class FilmComponent {
  @Input() film!: Film;

  @Input() hide!: boolean;

  msToTime(duration: number): string {
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    minutes = minutes < 10 ? 0 + minutes : minutes;
    hours = hours < 10 ? 0 + hours : hours;

    return `${hours}:${minutes}`;
  }
}
