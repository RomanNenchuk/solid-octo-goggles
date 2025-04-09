import { makeRequest } from "./makeRequest";
import { MovieType } from "../components/MovieList/MovieList";
import { Params } from "react-router-dom";

type FetchMoviesProps = {
  query: string;
  page: number;
};

export type FetchMoviesResponse = {
  movies: MovieType[];
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

export async function fetchMovie(
  movieId: Readonly<Params<string>>
): Promise<MovieType> {
  const { id } = movieId;
  console.log(movieId);

  const movie = await makeRequest(`/movies/${id}`);
  return movie;
}
