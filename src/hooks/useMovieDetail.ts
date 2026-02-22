import { useEffect, useState } from "react";
import { getMovieDetail } from "../services/movies.service";

export type MovieDetail = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  runtime: number | null;
};

type State =
  | { status: "loading"; data: null; error: null }
  | { status: "success"; data: MovieDetail; error: null }
  | { status: "error"; data: null; error: string };

export function useMovieDetail(id?: string) {
  const [state, setState] = useState<State>({
    status: "loading",
    data: null,
    error: null,
  });

  useEffect(() => {
    if (!id) return;

    let cancelled = false;

    getMovieDetail(Number(id))
      .then(({ data }) => {
        if (cancelled) return;
        setState({ status: "success", data: data as MovieDetail, error: null });
      })
      .catch(() => {
        if (cancelled) return;
        setState({
          status: "error",
          data: null,
          error: "Não foi possível carregar o filme.",
        });
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  return state;
}