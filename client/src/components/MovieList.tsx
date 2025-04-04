import MovieCard from "./MovieCard";
import LoadingSpinner from "./LoadingSpinner";

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
  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <ul className={`flex flex-wrap gap-y-8 gap-x-4 ${className}`}>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
      {isFetchingNextPage && <LoadingSpinner />}
      {hasNextPage && (
        <button onClick={fetchNextPage} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? "Завантажується..." : "Завантажити ще"}
        </button>
      )}
    </div>
  );
}
