import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieType } from "../MovieList/MovieList";
import { fetchMovie } from "../../services/movies";
import LoadingSpinner from "../LoadingSpinner";
import MovieCardCover from "../MovieList/MovieCardCover";
import MovieCardTextInfo from "../MovieList/MovieCardTextInfo";
import ShowTimeList from "../MovieList/ShowTimeList";

export default function MovieDescription() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<MovieType | null>(null);

  const { id: movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;

    async function getMovieDescription() {
      try {
        setLoading(true);
        const movieInfo = await fetchMovie({ id: movieId });
        console.log(movieInfo);

        setMovie(movieInfo);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getMovieDescription();
  }, [movieId]);

  if (loading || !movie) return <LoadingSpinner />;

  return (
    <div
      className={`flex justify-around max-w-[1300px] gap-8 p-8 flex-col lg:flex-row lg:gap-8 relative mx-auto`}
    >
      <MovieCardCover
        cover={movie.cover}
        name={movie.name}
        className="w-full h-[350px] sm:h-[370px] lg:w-[250px] overflow-hidden rounded-lg flex-shrink-0"
      />
      <div className="lg:max-w-[60%] flex flex-col gap-4">
        <MovieCardTextInfo
          name={movie.name}
          genre={movie.genre}
          description={movie.description}
        />
      </div>
      {movie.showTimes?.length ? (
        <div className="bg-[#2f2b2b] lg:min-w-[300px] rounded-lg p-2">
          <h3 className="text-lg font-medium mb-[20px]">Розклад сеансів</h3>
          <ShowTimeList showTimes={movie.showTimes} className="gap-2" />
        </div>
      ) : null}
    </div>
  );
}
