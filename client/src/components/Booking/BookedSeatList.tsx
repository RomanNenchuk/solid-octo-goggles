import { useBooking } from "../../contexts/BookingContext";
import BookedSeatItem from "./BookedSeatItem";

export default function BookedSeatList() {
  const { selectedSeats } = useBooking();
  return (
    <>
      <h3>Обрані місця:</h3>
      {selectedSeats.map(seat => (
        <BookedSeatItem seat={seat} />
      ))}
    </>
  );
}
