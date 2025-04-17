import { SeatType } from "./CinemaHall";
import { useBooking } from "../../contexts/BookingContext";

export default function Seat({ seat }: { seat: SeatType }) {
  const { setHall } = useBooking();

  const handleSelectSeat = () => {
    if (seat.isOccupied) return;

    setHall(prevInfo => ({
      ...prevInfo,
      seats: prevInfo.seats.map(prevSeat => {
        if (seat.id === prevSeat.id)
          return { ...prevSeat, isSelected: !prevSeat.isSelected };

        return prevSeat;
      }),
    }));
  };

  return (
    <div
      className="bg-white border border-violet-700 transition-all duration-300 shadow-md cursor-pointer
        hover:shadow-violet-500/30 w-8 h-10 rounded-sm flex items-center justify-center text-white flex-shrink-0"
      style={{
        backgroundColor: seat.isOccupied
          ? "black"
          : seat.isSelected
          ? "#95c7f4"
          : "",
      }}
      onClick={handleSelectSeat}
    />
  );
}
