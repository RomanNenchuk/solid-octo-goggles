import axios from "axios";
import { Movie } from "../components/MovieList";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

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
  const response = await api("/movies", { params: { query, page } });
  const movies = response.data;
  console.log(movies);

  return {
    movies,
    hasMore: movies.length > 0,
    nextPage: movies.length > 0 ? page + 1 : undefined,
  };
}
