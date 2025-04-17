import { MovieType } from "./MovieList";
import MovieCardTextInfo from "./MovieCardTextInfo";
import MovieCardCover from "./MovieCardCover";
import { useNavigate } from "react-router-dom";
import ShowTimeList from "./ShowTimeList";

type MovieCardProps = {
  movie: MovieType;
  className?: string;
};

export default function MovieCard({ movie, className }: MovieCardProps) {
  const navigate = useNavigate();
  const handleCardClick = () => {
    if (movie.id) navigate(`/movies/${movie.id}`);
  };

  return (
    <div
      className={`flex flex-col lg:flex-row gap-4 w-[100%] sm:w-[calc(50%-16px)] xl:w-[calc(33%-32px)] relative ${className}`}
    >
      <MovieCardCover
        cover={movie.cover}
        name={movie.name}
        onClick={handleCardClick}
        className="w-full h-[350px] sm:h-[300px] lg:w-[60%] lg:h-[300px] lg:w-[200px] xl:h-[224px] xl:w-[140px] overflow-hidden rounded-lg flex-shrink-0"
      />

      <div className="max-w-[60%] flex flex-col gap-4">
        <MovieCardTextInfo
          name={movie.name}
          genre={movie.genre}
          description={movie.description}
          onClick={handleCardClick}
        />
        {movie.showTimes?.length ? (
          <ShowTimeList showTimes={movie.showTimes} />
        ) : null}
      </div>
    </div>
  );
}
