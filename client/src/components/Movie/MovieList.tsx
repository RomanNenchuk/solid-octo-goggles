import MovieCard from "./MovieCard";
import LoadingSpinner from "../LoadingSpinner";

export type Movie = {
  id: string;
  cover: string;
  name: string;
  description: string;
  genre: string;
  showTimes?: ShowTime[];
};

export type ShowTime = {
  id: string;
  startTime: Date | string;
  hall: Hall;
};

type Hall = {
  id: string;
  name: string;
  totalSeats: number;
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
  // hasNextPage = false,
  // fetchNextPage,
  className,
}: MovieListProps) {
  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <ul
        className={`flex flex-wrap gap-y-8 justify-between p-[34px] lg:gap-x-8 ${className}`}
      >
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
      {isFetchingNextPage && <LoadingSpinner />}
    </>
  );
}
