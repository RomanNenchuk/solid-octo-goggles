import { useEffect, useRef } from "react";
import MovieList from "../components/MovieList/MovieList";
import { fetchMovies } from "../services/movies";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearch } from "../contexts/SearchContext";

export default function Home() {
  const { debouncedQuery } = useSearch();
  const observerRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["movies", debouncedQuery],
      queryFn: ({ pageParam = 1 }) =>
        fetchMovies({ query: debouncedQuery, page: pageParam }),
      getNextPageParam: lastPage => lastPage.nextPage,
      initialPageParam: 1,
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
    });

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage)
          fetchNextPage();
      },
      { threshold: 0.1 }
    );
    observer.observe(observerRef.current);
    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
      observer.disconnect();
    };
  }, [hasNextPage, isFetchingNextPage]);

  const allMovies = data?.pages.flatMap(page => page.movies) || [];

  return (
    <>
      <MovieList
        movies={allMovies}
        isLoading={isLoading}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        className="py-8 max-w-[1302px] mx-auto"
      />
      <div ref={observerRef} className="h-1"></div>
    </>
  );
}
