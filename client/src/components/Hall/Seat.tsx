import { useEffect, useState } from "react";
import { SeatType } from "./CinemaHall";
import { useBooking } from "../../contexts/BookingContext";

export default function Seat({ seat }: { seat: SeatType }) {
  const [isSelected, setIsSelected] = useState(false);
  const { selectedSeats, setSelectedSeats } = useBooking();

  const handleSelectSeat = () => {
    if (seat.isOccupied) return;
    setIsSelected(prev => !prev);
    if (isSelected)
      setSelectedSeats(prevSeats =>
        prevSeats.filter(selectedSeat => seat.id === selectedSeat.id)
      );
    else setSelectedSeats(prevSeats => [...prevSeats, seat]);
  };

  useEffect(() => {
    console.log(selectedSeats);
  }, [selectedSeats]);

  return (
    <div
      className="bg-white border border-violet-700 transition-all duration-300 shadow-md 
        hover:shadow-violet-500/30 w-8 h-10 rounded-sm flex items-center justify-center text-white flex-shrink-0"
      style={{
        backgroundColor: seat.isOccupied
          ? "black"
          : isSelected
          ? "#95c7f4"
          : "",
      }}
      onClick={handleSelectSeat}
    ></div>
  );
}
