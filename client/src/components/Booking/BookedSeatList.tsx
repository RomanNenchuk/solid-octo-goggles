import { useBooking } from "../../contexts/BookingContext";
import { SeatType } from "../Hall/CinemaHall";
import BookedSeatItem from "./BookedSeatItem";

export default function BookedSeatList() {
  const { hall, setHall } = useBooking();
  const handleCrossClick = (id: SeatType["id"]) => {
    setHall(prevHall => ({
      ...prevHall,
      seats: prevHall.seats.map(prevSeat => {
        if (prevSeat.id === id) return { ...prevSeat, isSelected: false };

        return prevSeat;
      }),
    }));
  };

  const selectedSeats = hall.seats.filter(seat => seat.isSelected);

  return (
    <>
      <h3 className="mb-4 text-lg">Квитки. Обрано {selectedSeats.length}</h3>
      <ul className="flex flex-col gap-2 mb-auto max-h-[calc(100%-100px)] overflow-auto">
        {selectedSeats.map(seat => (
          <BookedSeatItem
            key={seat.id}
            seat={seat}
            handleCrossClick={handleCrossClick}
          />
        ))}
      </ul>
    </>
  );
}
