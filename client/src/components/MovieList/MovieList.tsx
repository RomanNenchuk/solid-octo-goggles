import MovieCard from "./MovieCard";
import LoadingSpinner from "../LoadingSpinner";

export type MovieType = {
  id?: string;
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
  movies: MovieType[];
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
  className,
}: MovieListProps) {
  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <ul
        className={`flex flex-wrap gap-y-8 justify-between p-[15px] lg:p-[34px] lg:gap-x-8 ${className}`}
      >
        {movies.length > 0 ? (
          movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <h3 className="text-lg leading-5 font-bold mx-auto mt-8">
            За Вашим запитом фільмів не знайдено
          </h3>
        )}
      </ul>
      {isFetchingNextPage && <LoadingSpinner />}
    </>
  );
}
