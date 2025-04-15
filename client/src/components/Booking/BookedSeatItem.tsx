import { SeatType } from "../Hall/CinemaHall";

export default function BookedSeatItem({ seat }: { seat: SeatType }) {
  return (
    <div key={seat.id}>
      {seat.row} ряд {seat.column} місце
    </div>
  );
}
