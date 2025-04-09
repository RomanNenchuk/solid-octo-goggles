import { SeatType } from "./CinemaHall";

export default function Seat({ seat }: { seat: SeatType }) {
  return (
    <div
      className="bg-white border border-violet-700 transition-all duration-300 shadow-md 
        hover:shadow-violet-500/30 w-8 h-10 rounded-sm flex items-center justify-center text-white flex-shrink-0"
      style={{ backgroundColor: seat.isOccupied ? "black" : "" }}
    ></div>
  );
}
