import { useState } from "react";
import BookedSeatList from "./BookedSeatList";
import ConfirmationModal from "./ConfirmationModal";
import { useBooking } from "../../contexts/BookingContext";

export default function BookingSidebar() {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const handleContinue = () => setIsConfirmationModalOpen(true);
  const { hall } = useBooking();

  return (
    <div className="flex flex-col bg-[#2f2b2b] sticky top-[120px] right-0 min-w-[300px] h-[calc(100vh-155px)] p-4 rounded-lg">
      <BookedSeatList />
      {isConfirmationModalOpen && (
        <ConfirmationModal
          setIsConfirmationModalOpen={setIsConfirmationModalOpen}
        />
      )}
      <button
        className="p-3 bg-[#c4b5fd] text-[#000] rounded-md hover:bg-[#333]
          transition-colors duration-200"
        onClick={handleContinue}
        disabled={!hall.seats.find(seat => seat.isSelected)}
      >
        Продовжити
      </button>
    </div>
  );
}
