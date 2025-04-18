import { RowType, SeatType } from "./CinemaHall";
import Seat from "./Seat";

type RowProps = {
  rowNumber?: number;
  seatsInRow: RowType;
  handleSelectSeat: (
    id: SeatType["id"],
    isOccupied: SeatType["isOccupied"]
  ) => void;
};

export default function Row({ seatsInRow, handleSelectSeat }: RowProps) {
  return (
    <div className="flex gap-2 min-w-fit justify-center">
      {seatsInRow.map(seat => (
        <Seat
          key={seat.id}
          id={seat.id}
          isOccupied={seat.isOccupied}
          isSelected={seat.isSelected}
          handleSelectSeat={handleSelectSeat}
        />
      ))}
    </div>
  );
}
