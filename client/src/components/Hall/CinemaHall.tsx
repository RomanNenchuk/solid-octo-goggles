import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchShowTimeInfo } from "../../services/showTimes";
import LoadingSpinner from "../LoadingSpinner";
import Row from "./Row";
import CinemaHallHeader from "./CinemaHallHeader";

export type SeatType = {
  id: string;
  row: number;
  column: number;
  isOccupied: boolean;
};

export type Hall = {
  name: string;
  totalSeats: number;
  seats: SeatType[];
};

export type RowType = SeatType[];

export const NUMBER_OF_COLUMNS = 10;

export default function CinemaHall() {
  const { id: showTimeId } = useParams();
  const [hall, setHall] = useState<Hall | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!showTimeId) return;
    async function getHallInfo() {
      setLoading(true);
      const showTimeInfo = await fetchShowTimeInfo({
        id: showTimeId,
      });

      // const hallInfo: Hall = { ...showTimeInfo, seats: [] };
      // const showTimeInfo.seats = showTimeInfo.bookedSeats
      setHall(showTimeInfo);
      setLoading(false);
    }
    getHallInfo();
  }, [showTimeId]);

  if (loading || !hall) return <LoadingSpinner />;

  const seatsByRow: any = hall.seats.reduce(
    (rows: RowType[], currentSeat, seatIndex) => {
      const currentRow = Math.floor(seatIndex / NUMBER_OF_COLUMNS);

      if (!rows[currentRow]) rows.push([]);
      rows[currentRow].push(currentSeat);

      return rows;
    },
    []
  );

  return (
    <>
      <CinemaHallHeader hallName={hall.name} />

      {hall.seats?.length > 0 ? (
        <main className="w-full overflow-x-auto p-4">
          <div className="flex flex-col gap-4 min-w-[fit-content] p-1">
            {seatsByRow.map((row: RowType, index: number) => (
              <Row seatsInRow={row} rowNumber={index + 1} key={index} />
            ))}
          </div>
        </main>
      ) : null}
    </>
  );
}
