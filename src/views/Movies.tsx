import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/movies.service";

type Movie = {
  id: number;
  title: string;
};

export function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getPopularMovies().then(({ data }) => {
      setMovies(data.results as Movie[]);
    });
  }, []);

  return (
    <section style={styles.container}>
      <h1 style={styles.title}>Filmes Populares</h1>

      <div style={styles.grid}>
        {movies.map((movie) => (
          <div key={movie.id} style={styles.card}>
            <h3>{movie.title}</h3>
            <button style={styles.button}>Ver detalhes</button>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: "40px",
    maxWidth: "1200px",
    margin: "0 auto"
  },
  title: {
    marginBottom: "24px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "20px"
  },
  card: {
    backgroundColor: "#f4f4f4",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: "transform 0.2s ease"
  },
  button: {
    marginTop: "12px",
    padding: "8px 12px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#111",
    color: "#fff"
  }
};