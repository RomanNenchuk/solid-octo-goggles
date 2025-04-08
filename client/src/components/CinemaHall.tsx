import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchShowTimeInfo } from "../services/showTimes";
import LoadingSpinner from "./LoadingSpinner";

export type Seat = {
  row: number;
  column: number;
  isOccupied: boolean;
};

export type Hall = {
  name: string;
  seats: Seat[];
};

export default function CinemaHall() {
  const showTimeId = useParams();
  const [hall, setHall] = useState<Hall>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!showTimeId) return;
    async function getHallInfo() {
      setLoading(true);
      const showTimeInfo = await fetchShowTimeInfo(showTimeId);
      setHall(showTimeInfo);
      setLoading(false);
    }
    getHallInfo();
  }, [showTimeId]);

  if (loading || !hall) return <LoadingSpinner />;

  return (
    <div>
      <header>{hall.name}</header>
      {hall.seats.length > 0 ? (
        <main>
          {hall.seats.map(seat => (
            <div>{`${seat.row}  ${seat.column}  ${seat.isOccupied}`}</div>
          ))}
        </main>
      ) : null}
    </div>
  );
}
