import { useParams } from "react-router-dom";
import { fetchShowTimeInfo } from "../../services/showTimes";
import LoadingSpinner from "../LoadingSpinner";
import Row from "./Row";
import CinemaHallHeader from "./CinemaHallHeader";
import { useQuery } from "@tanstack/react-query";
import BookingSidebar from "../Booking/BookingSidebar";

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

  const {
    data: hall,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["showTime", showTimeId],
    enabled: !!showTimeId,
    queryFn: () => fetchShowTimeInfo({ id: showTimeId }),
  });

  console.log(hall);
  if (isLoading || !hall) return <LoadingSpinner />;

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
    <div className="flex relative justify-between">
      <div className="flex-grow">
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
      </div>
      <BookingSidebar refetch={refetch} />
    </div>
  );
}
