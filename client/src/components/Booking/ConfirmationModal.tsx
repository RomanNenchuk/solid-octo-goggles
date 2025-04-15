import { MouseEvent, useEffect, useRef } from "react";
import Modal from "../Modal/Modal";
import ModalHeader from "../Modal/ModalHeader";
import ModalInput from "../Modal/ModalInput";

type ConfirmationModalProps = {
  setIsConfirmationModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ConfirmationModal({
  setIsConfirmationModalOpen,
}: ConfirmationModalProps) {
  const confirmationFormRef = useRef<HTMLFormElement>(null);
  const userNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleCloseModal = (e: MouseEvent) => {
    if (
      confirmationFormRef?.current &&
      !confirmationFormRef.current.contains(e.target as Node)
    ) {
      setIsConfirmationModalOpen(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <Modal>
      <div
        className="absolute z-1000 bg-[#000000b3] top-0 left-0 h-full w-full"
        onClick={handleCloseModal}
      >
        <form
          className="absolute absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2
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
            label="Телефон"
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
