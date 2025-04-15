import { useState } from "react";
import BookedSeatList from "./BookedSeatList";
import ConfirmationModal from "./ConfirmationModal";
import { useBooking } from "../../contexts/BookingContext";

export default function BookingSidebar() {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const handleContinue = () => setIsConfirmationModalOpen(true);
  const { selectedSeats } = useBooking();

  return (
    <div className="bg-[#2f2b2b] sticky top-[120px] right-0 min-w-[300px] h-[calc(100vh-155px)] p-4 rounded-lg">
      <BookedSeatList />
      {isConfirmationModalOpen && (
        <ConfirmationModal
          setIsConfirmationModalOpen={setIsConfirmationModalOpen}
        />
      )}
      <button onClick={handleContinue} disabled={!selectedSeats.length}>
        Продовжити
      </button>
    </div>
  );
}
