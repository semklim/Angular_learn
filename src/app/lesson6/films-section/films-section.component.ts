import { Component } from '@angular/core';
import { FilmsDataService } from '../films-data/films-data.service';

@Component({
  selector: 'app-films-section',
  templateUrl: './films-section.component.html',
  styleUrls: ['./films-section.component.css'],
  providers: [FilmsDataService],
})
export class FilmsSectionComponent {
  hide = false;

  constructor(public filmsData: FilmsDataService) {}

  log(el: HTMLInputElement) {
    this.hide = el.checked;
  }
}
