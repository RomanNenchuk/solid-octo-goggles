import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieType } from "../MovieList/MovieList";
import { fetchMovie } from "../../services/movies";
import LoadingSpinner from "../LoadingSpinner";
import MovieCard from "../MovieList/MovieCard";

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
  const { id, ...otherInfo } = movie;
  return (
    <div>
      <MovieCard movie={otherInfo} />
    </div>
  );
}
