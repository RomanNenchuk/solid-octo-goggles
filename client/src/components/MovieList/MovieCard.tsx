import { Movie } from "./MovieList";
import MovieCardTextInfo from "./MovieCardTextInfo";
import MovieCardCover from "./MovieCardCover";

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 w-[100%] sm:w-[calc(50%-16px)] xl:w-[calc(33%-32px)] relative">
      <MovieCardCover cover={movie.cover} name={movie.name} />
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
