import { useState } from "react";
import BookedSeatList from "./BookedSeatList";
import ConfirmationModal from "./ConfirmationModal";
import { useBooking } from "../../contexts/BookingContext";

export default function BookingSidebar() {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const handleContinue = () => setIsConfirmationModalOpen(true);
  const { hall } = useBooking();

  return (
    <div
      className="flex flex-col bg-[#2f2b2b] min-h-[300px] lg:sticky lg:top-[120px] 
      lg:right-0 min-w-[300px] lg:h-[calc(100vh-155px)] p-4 rounded-lg"
    >
      <BookedSeatList />
      {isConfirmationModalOpen && (
        <ConfirmationModal
          setIsConfirmationModalOpen={setIsConfirmationModalOpen}
        />
      )}
      <button
        className="p-3 bg-[#c4b5fd] text-[#000] rounded-md hover:bg-[#8676c4]
          transition-colors duration-200 cursor-pointer text-[18px] mt-6"
        onClick={handleContinue}
        disabled={!hall.seats.find(seat => seat.isSelected)}
      >
        Продовжити
      </button>
    </div>
  );
}
