export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: 'movie' | 'series';
  Poster: string;
}

export interface MovieDetails extends Movie {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  imdbRating: string;
  imdbVotes: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
