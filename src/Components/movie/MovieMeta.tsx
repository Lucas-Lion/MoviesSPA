type Props = {
  releaseDate: string;
  voteAverage: number;
  runtime: number | null;
  overview: string;
};

function formatRuntime(runtime: number | null) {
  return runtime ? `${runtime} min` : "—";
}

function formatVote(vote: number) {
  return Number.isFinite(vote) ? vote.toFixed(1) : "—";
}

export function MovieMeta({ releaseDate, voteAverage, runtime, overview }: Props) {
  return (
    <div style={{ marginTop: 8 }}>
      <p style={{ margin: "8px 0" }}>
        <strong>Lançamento:</strong> {releaseDate || "—"}
      </p>
      <p style={{ margin: "8px 0" }}>
        <strong>Nota:</strong> {formatVote(voteAverage)}
      </p>
      <p style={{ margin: "8px 0" }}>
        <strong>Duração:</strong> {formatRuntime(runtime)}
      </p>

      <p style={{ marginTop: 16, lineHeight: 1.5 }}>
        {overview || "Sem descrição."}
      </p>
    </div>
  );
}