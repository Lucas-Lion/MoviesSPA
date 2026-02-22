import { Link, useParams } from "react-router-dom";
import { useMovieDetail } from "../hooks/useMovieDetail";
import { MovieHero } from "../Components/movie/MovieHero";
import { MovieMeta } from "../Components/movie/MovieMeta";

export function MovieDetail() {
  const { id } = useParams();
  const state = useMovieDetail(id);

  if (state.status === "loading") return <div style={{ padding: 24 }}>Carregando...</div>;
  if (state.status === "error") return <div style={{ padding: 24 }}>{state.error}</div>;

  const movie = state.data;

  return (
    <section style={{ padding: 24, maxWidth: 1000, margin: "0 auto" }}>
      <Link to="/movies">← Voltar</Link>

      <MovieHero
        title={movie.title}
        posterPath={movie.poster_path}
        backdropPath={movie.backdrop_path}
      />

      <MovieMeta
        releaseDate={movie.release_date}
        voteAverage={movie.vote_average}
        runtime={movie.runtime}
        overview={movie.overview}
      />
    </section>
  );
}