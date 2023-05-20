export type Film = {
  id: string;
  title: string;
  description: string;
  imdb_rating: number;
  actors: string[];
  release_date: string;
  image: string;
  genre: string[];
  director: string;
  duration_ms: number;
  language: string;
  country: string;
};

export type FilmsResponse = {
  films: Film[];
};
