import styles from "./Movies.module.css";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { MovieCard } from "../Components/movie/MovieCard";

export function Movies() {
  const state = usePopularMovies();

  if (state.status === "loading") {
    return <div className={styles.container}>Carregando...</div>;
  }

  if (state.status === "error") {
    return <div className={styles.container}>{state.error}</div>;
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Filmes Populares</h1>

      <div className={styles.grid}>
        {state.data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}