import { Link } from "react-router-dom";
import { getTmdbImageUrl } from "../../services/tmdb-image.service";
import styles from "../../views/Movies.module.css"; // reaproveitando o mesmo CSS
import type { Movie } from "../../hooks/usePopularMovies";

type Props = {
  movie: Movie;
};

export function MovieCard({ movie }: Props) {
  const posterUrl = getTmdbImageUrl(movie.poster_path, "w342");

  return (
    <div className={styles.card}>
      {posterUrl ? (
        <img
          src={posterUrl}
          alt={`Poster de ${movie.title}`}
          className={styles.poster}
          loading="lazy"
        />
      ) : (
        <div className={styles.posterFallback}>Sem imagem</div>
      )}

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{movie.title}</h3>
        <Link to={`/movies/${movie.id}`} className={styles.button}>
          Ver detalhes
        </Link>
      </div>
    </div>
  );
}