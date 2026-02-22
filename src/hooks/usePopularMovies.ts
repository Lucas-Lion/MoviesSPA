import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/movies.service";

export type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
};

type State =
  | { status: "loading"; data: Movie[]; error: null }
  | { status: "success"; data: Movie[]; error: null }
  | { status: "error"; data: Movie[]; error: string };

type PopularMoviesResponse = {
  results: Movie[];
};

export function usePopularMovies() {
  const [state, setState] = useState<State>({
    status: "loading",
    data: [],
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    getPopularMovies()
      .then(({ data }) => {
        if (cancelled) return;
        const payload = data as PopularMoviesResponse;

        setState({
          status: "success",
          data: payload.results ?? [],
          error: null,
        });
      })
      .catch(() => {
        if (cancelled) return;
        setState({
          status: "error",
          data: [],
          error: "Não foi possível carregar os filmes.",
        });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}