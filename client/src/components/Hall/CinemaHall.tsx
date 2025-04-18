import Row from "./Row";
import CinemaHallHeader from "./CinemaHallHeader";
import BookingSidebar from "../Booking/BookingSidebar";
import { useBooking } from "../../contexts/BookingContext";
import { useCallback } from "react";

export type SeatType = {
  id: string;
  row: number;
  column: number;
  isOccupied: boolean;
  isSelected?: boolean;
};

export type Hall = {
  name: string;
  totalSeats: number;
  seats: SeatType[];
};

export type RowType = SeatType[];

export const NUMBER_OF_COLUMNS = 10;

export default function CinemaHall() {
  const { hall, setHall } = useBooking();

  const seatsByRow: any = hall.seats.reduce(
    (rows: RowType[], currentSeat, seatIndex) => {
      const currentRow = Math.floor(seatIndex / NUMBER_OF_COLUMNS);
      if (!rows[currentRow]) rows.push([]);
      rows[currentRow].push(currentSeat);
      return rows;
    },
    []
  );

  const handleSelectSeat = useCallback(
    (id: SeatType["id"], isOccupied: SeatType["isOccupied"]) => {
      if (isOccupied) return;

      setHall(prevInfo => ({
        ...prevInfo,
        seats: prevInfo.seats.map(prevSeat => {
          if (id === prevSeat.id)
            return { ...prevSeat, isSelected: !prevSeat.isSelected };

          return prevSeat;
        }),
      }));
    },
    []
  );

  return (
    <div className="flex flex-col gap-8 relative justify-between lg:gap-0 lg:flex-row">
      <div className="flex-grow">
        <CinemaHallHeader />
        {hall.seats?.length > 0 ? (
          <main className="w-full overflow-x-auto p-4">
            <div className="flex flex-col gap-4 min-w-[fit-content] p-1">
              {seatsByRow.map((row: RowType, index: number) => (
                <Row
                  seatsInRow={row}
                  rowNumber={index + 1}
                  key={index}
                  handleSelectSeat={handleSelectSeat}
                />
              ))}
            </div>
          </main>
        ) : null}
      </div>
      <BookingSidebar />
    </div>
  );
}
