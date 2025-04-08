import { makeRequest } from "./makeRequest";
import { Movie } from "../components/MovieList/MovieList";

type FetchMoviesProps = {
  query: string;
  page: number;
};

export type FetchMoviesResponse = {
  movies: Movie[];
  hasMore: boolean;
  nextPage: number | undefined;
};

export async function fetchMovies({
  query,
  page,
}: FetchMoviesProps): Promise<FetchMoviesResponse> {
  const movies = await makeRequest("/movies", { params: { query, page } });

  return {
    movies,
    hasMore: movies.length > 0,
    nextPage: movies.length > 0 ? page + 1 : undefined,
  };
}
