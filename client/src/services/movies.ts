import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
});

export async function fetchMovies(query: string, page = 1) {
  const response = await api("/movies", { params: { query, page } });
  const movies = response.data;
  return {
    movies,
    hasMore: movies.length > 0,
    nextPage: movies.length > 0 ? page + 1 : undefined,
  };
}
