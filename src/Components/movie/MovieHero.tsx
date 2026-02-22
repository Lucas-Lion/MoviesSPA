import { getTmdbImageUrl } from "../../services/tmdb-image.service";

type Props = {
  title: string;
  posterPath: string | null;
  backdropPath: string | null;
};

export function MovieHero({ title, posterPath, backdropPath }: Props) {
  const posterUrl = getTmdbImageUrl(posterPath, "w342");
  const backdropUrl = getTmdbImageUrl(backdropPath, "w780");

  return (
    <>
      {backdropUrl ? (
        <img
          src={backdropUrl}
          alt={`Backdrop de ${title}`}
          style={{
            width: "100%",
            height: 300,
            objectFit: "cover",
            borderRadius: 12,
            marginTop: 16,
          }}
        />
      ) : null}

      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={`Poster de ${title}`}
            style={{ width: 220, borderRadius: 12 }}
          />
        ) : null}

        <div style={{ width: "100%" }}>
          <h1 style={{ marginTop: 0 }}>{title}</h1>
        </div>
      </div>
    </>
  );
}