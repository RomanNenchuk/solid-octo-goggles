import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

export type Movie = {
  id: string;
  cover: string;
  name: string;
  description: string;
  genre: string;
  date: string;
};

type MovieListProps = {
  className?: string;
};

export default function MovieList({ className }: MovieListProps) {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        const response = await axios.get(`${VITE_API_URL}/movies`);
        console.log(`${VITE_API_URL}/movies`, response);
        setMovieList(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  if (loading) return <div>Not Found</div>;

  return (
    <ul className={`flex flex-wrap gap-y-8 gap-x-4 ${className}`}>
      {movieList.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
