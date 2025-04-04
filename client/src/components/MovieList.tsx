import { ClipLoader } from "react-spinners";
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
  movies: Movie[];
  isLoading: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  fetchNextPage: () => void;
  className?: string;
};

export default function MovieList({
  movies,
  isLoading,
  isFetchingNextPage,
  hasNextPage = false,
  fetchNextPage,
  className,
}: MovieListProps) {
  if (isLoading)
    return (
      <div className="text-center mt-10">
        {<ClipLoader color="#36d7b7" size={60} />}
      </div>
    );

  return (
    <div>
      <ul className={`flex flex-wrap gap-y-8 gap-x-4 ${className}`}>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
      {hasNextPage && (
        <button onClick={fetchNextPage} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? "Завантажується..." : "Завантажити ще"}
        </button>
      )}
    </div>
  );
}
