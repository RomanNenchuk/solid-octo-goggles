import { MovieType } from "./MovieList";
import MovieCardTextInfo from "./MovieCardTextInfo";
import MovieCardCover from "./MovieCardCover";
import { useNavigate } from "react-router-dom";

type MovieCardProps = {
  movie: MovieType;
};

export default function MovieCard({ movie }: MovieCardProps) {
  const navigate = useNavigate();
  const handleCardClick = () => {
    if (movie.id) navigate(`/movies/${movie.id}`);
  };
  console.log(movie);

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-[100%] sm:w-[calc(50%-16px)] xl:w-[calc(33%-32px)] relative">
      <MovieCardCover
        cover={movie.cover}
        name={movie.name}
        onClick={handleCardClick}
      />
      <MovieCardTextInfo
        name={movie.name}
        genre={movie.genre}
        showTimes={movie.showTimes}
        description={movie.description}
        onClick={handleCardClick}
        className="max-w-[60%]"
      />
    </div>
  );
}
