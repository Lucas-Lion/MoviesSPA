import { Link } from "react-router-dom";

export function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>🎬 Movies App</h1>

      <nav style={styles.nav}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/movies">Movies</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    backgroundColor: "#111",
    color: "#fff"
  },
  logo: {
    margin: 0
  },
  nav: {
    display: "flex",
    gap: "16px"
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: 500
  }
};