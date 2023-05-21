import { Injectable } from '@angular/core';
import { Film, FilmsResponse } from 'src/app/types/films/films.type';

@Injectable({
  providedIn: 'root',
})
export class FilmsDataService {
  dataBase: FilmsResponse = {
    films: [
      {
        id: 'f1a84b06f8f93f2b',
        title: 'Inception',
        description: "A skilled thief enters people's dreams and steals their secrets.",
        imdb_rating: 8.8,
        actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
        release_date: '2010-07-16',
        image:
          'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UY1037_.jpg',
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        director: 'Christopher Nolan',
        duration_ms: 8880000,
        language: 'English',
        country: 'United States',
      },
      {
        id: 'e9d0a5b84a13c681',
        title: 'The Shawshank Redemption',
        description:
          'Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.',
        imdb_rating: 9.3,
        actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
        release_date: '1994-09-23',
        image: `https://m.media-amazon.com/images/M/MV5BOWExMGY4MzEtZjIzOS00ZTNkLTliOTUtYzkyNTJlZDcwN2Y3XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg`,
        genre: ['Drama'],
        director: 'Frank Darabont',
        duration_ms: 8520000,
        language: 'English',
        country: 'United States',
      },
      {
        id: '0c6ed3f0e72eac95',
        title: 'Pulp Fiction',
        description:
          "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        imdb_rating: 8.9,
        actors: ['John Travolta', 'Samuel L. Jackson', 'Uma Thurman'],
        release_date: '1994-10-14',
        image: `https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1055_.jpg`,
        genre: ['Crime', 'Drama'],
        director: 'Quentin Tarantino',
        duration_ms: 9240000,
        language: 'English',
        country: 'United States',
      },
    ],
  };

  get films(): Film[] {
    return this.dataBase.films;
  }

  set add(obj: Film) {
    this.dataBase.films.push(obj);
    console.log(this.dataBase.films);
  }

  remove(title: string) {
    this.dataBase.films = this.dataBase.films.filter((el: Film) => el.title !== title);
  }
}
