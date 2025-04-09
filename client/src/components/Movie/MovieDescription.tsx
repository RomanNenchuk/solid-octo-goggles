import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieType } from "../MovieList/MovieList";
import { fetchMovie } from "../../services/movies";
import LoadingSpinner from "../LoadingSpinner";

export default function MovieDescription() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<MovieType | null>(null);

  const { id: movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;

    async function getMovieDescription() {
      try {
        setLoading(true);
        const movieInfo = await fetchMovie({ movieId });
        setMovie(movieInfo);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  }, [movieId]);

  if (loading || !movie) return <LoadingSpinner />;

  return <div></div>;
}
