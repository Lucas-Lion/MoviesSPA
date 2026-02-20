import { moviesApis } from "../config/http";

export function getPopularMovies() {
  return moviesApis.get("movie/popular");
}

export function getMovieDetail(movieId: number) {
  return moviesApis.get(`movie/${movieId}`);
}