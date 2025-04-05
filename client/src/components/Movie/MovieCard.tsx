import { Movie } from "./MovieList";
import MovieCardTextInfo from "./MovieCardTextInfo";
import MovieCardCover from "./MovieCardCover";

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="w-[calc(33%-32px)] flex gap-4">
      <MovieCardCover cover={movie.cover} />

      <MovieCardTextInfo
        name={movie.name}
        genre={movie.genre}
        showTimes={movie.showTimes}
        description={movie.description}
        className="max-w-[60%]"
      />
    </div>
  );
}
