import { Injectable } from '@angular/core';
import { Film, FilmsResponse } from 'src/app/types/films/films.type';

@Injectable({
  providedIn: 'root',
})
export class FilmsDataService {
  private dataBase: FilmsResponse = {
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
      {
        id: '7b9f8a2f9c03e60c',
        title: 'The Dark Knight',
        description:
          'Batman sets out to dismantle the remaining criminal organizations that plague Gotham City, but faces a new threat in the form of the Joker.',
        imdb_rating: 9.0,
        actors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
        release_date: '2008-07-18',
        image: `https://m.media-amazon.com/images/M/MV5BMTIzMDc4MzA2Ml5BMl5BanBnXkFtZTcwODU0MzA3MQ@@._V1_FMjpg_UX510_.jpg`,
        genre: ['Action', 'Crime', 'Drama'],
        director: 'Christopher Nolan',
        duration_ms: 9120000,
        language: 'English',
        country: 'United States',
      },
      {
        id: 'a3e5b870d2936b3f',
        title: 'Fight Club',
        description:
          'An insomniac office worker and a soap salesman form an underground fight club that evolves into something much more dangerous.',
        imdb_rating: 8.8,
        actors: ['Brad Pitt', 'Edward Norton', 'Helena Bonham Carter'],
        release_date: '1999-10-15',
        image:
          'https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UY720_.jpg',
        genre: ['Drama'],
        director: 'David Fincher',
        duration_ms: 8340000,
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
  }

  remove(id: string) {
    this.dataBase.films.filter((el: Film) => el.id !== id);
  }
}
