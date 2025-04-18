import { FormEvent, MouseEvent, useEffect, useRef } from "react";
import Modal from "../Modal/Modal";
import ModalHeader from "../Modal/ModalHeader";
import ModalInput from "../Modal/ModalInput";
import { makeBooking } from "../../services/booking";
import { useParams } from "react-router-dom";
import { useBooking } from "../../contexts/BookingContext";
import { toast } from "react-toastify";

type ConfirmationModalProps = {
  setIsConfirmationModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ConfirmationModal({
  setIsConfirmationModalOpen,
}: ConfirmationModalProps) {
  const { id } = useParams();
  const { hall, setHall, refetch } = useBooking();
  const confirmationFormRef = useRef<HTMLFormElement>(null);
  const userNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const clearSelection = () => {
    setHall(prevInfo => ({
      ...prevInfo,
      seats: hall.seats.map(seat => ({
        ...seat,
        isOccupied: false,
      })),
    }));
  };

  const handleCloseModal = () => {
    setIsConfirmationModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleBackgroundClick = (e: MouseEvent) => {
    if (
      confirmationFormRef?.current &&
      !confirmationFormRef.current.contains(e.target as Node)
    )
      handleCloseModal();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!(id && userNameRef?.current && emailRef?.current && phoneRef?.current))
      return;

    try {
      const userName = userNameRef.current.value;
      const email = emailRef.current.value;
      const phone = phoneRef.current.value;
      const response = await makeBooking({
        id,
        userName,
        email,
        phone,
        selectedSeats: hall.seats
          .filter(seat => seat.isSelected)
          .map(seat => seat.id),
      });
      if (response.status === 201) {
        clearSelection();
        toast.success("Успішно заброньовано!");
        handleCloseModal();
        refetch();
      }
    } catch (error) {
      toast.error("На жаль, сталася помилка :(");
      console.error(error);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <Modal>
      <div
        className="fixed z-1000 bg-[#000000b3] top-0 left-0 h-full w-full"
        onClick={handleBackgroundClick}
      >
        <form
          onSubmit={handleSubmit}
          className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2
          bg-[#fff] flex flex-col p-4 rounded-lg text-[#000] min-w-[350px]"
          ref={confirmationFormRef}
        >
          <ModalHeader title="Бронювання" onClick={handleCloseModal} />
          <ModalInput
            label="Ім'я та прізвище"
            placeholder="John Doe"
            ref={userNameRef}
            required
          />
          <ModalInput
            type="tel"
            label="+380123456789"
            placeholder="+380123456789"
            ref={phoneRef}
            pattern="^\+380\d{9}$"
            required
          />
          <ModalInput
            type="email"
            label="Ел. пошта"
            placeholder="john@example.com"
            ref={emailRef}
            required
          />
          <button
            className="p-3 bg-[#000] text-[#fff] rounded-md hover:bg-[#333]
          transition-colors duration-200"
          >
            Забронювати
          </button>
        </form>
      </div>
    </Modal>
  );
}
