import { Params } from "react-router-dom";
import { makeRequest } from "./makeRequest";
import { Hall } from "../components/Hall/CinemaHall";

export async function fetchShowTimeInfo(
  showTimeId: Readonly<Params<string>>
): Promise<Hall> {
  const { id } = showTimeId;
  const showTimeInfo = await makeRequest(`/showTimes/${id}`);

  return showTimeInfo.data;
}
