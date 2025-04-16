import { SeatType } from "../Hall/CinemaHall";

export default function BookedSeatItem({ seat }: { seat: SeatType }) {
  return (
    <div>
      {seat.row} ряд {seat.column} місце
    </div>
  );
}
