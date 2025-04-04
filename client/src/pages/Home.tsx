import { useState } from "react";
import MovieList from "../components/MovieList";
import QueryInput from "../components/QueryInput";
import { fetchMovies } from "../services/movies";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";

export default function Home() {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 300);

  const movies = useInfiniteQuery({
    queryKey: ["movies", debouncedQuery],
    queryFn: ({ pageParam = 1 }) =>
      fetchMovies({ query: debouncedQuery, page: pageParam }),
    getNextPageParam: lastPage => lastPage.nextPage,
    initialPageParam: 1,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  const allMovies = movies.data?.pages.flatMap(page => page.movies) || [];

  return (
    <>
      <QueryInput query={query} setQuery={setQuery} />
      <MovieList
        movies={allMovies}
        isLoading={movies.isLoading}
        isFetchingNextPage={movies.isFetchingNextPage}
        hasNextPage={movies.hasNextPage}
        fetchNextPage={movies.fetchNextPage}
        className="py-4 px-8 max-w-[1302px] mx-auto"
      />
    </>
  );
}
