import { Params } from "react-router-dom";
import { makeRequest } from "./makeRequest";
import { Hall } from "../components/CinemaHall";

export async function fetchShowTimeInfo(
  showTimeId: Readonly<Params<string>>
): Promise<Hall> {
  const showTimeInfo = await makeRequest(`/movies/showTimes/${showTimeId}`);

  return showTimeInfo;
}
