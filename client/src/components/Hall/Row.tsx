import { RowType } from "./CinemaHall";
import Seat from "./Seat";

type RowProps = {
  rowNumber?: number;
  seatsInRow: RowType;
};

export default function Row({ seatsInRow }: RowProps) {
  return (
    <div className="flex gap-2 min-w-fit justify-center">
      {seatsInRow.map(seat => (
        <Seat key={seat.id} seat={seat} />
      ))}
    </div>
  );
}
