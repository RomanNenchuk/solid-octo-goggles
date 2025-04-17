import screenIcon from "../../assets/screen.svg";
import { useBooking } from "../../contexts/BookingContext";

export default function CinemaHallHeader() {
  const { hall } = useBooking();
  return (
    <div className="flex flex-col gap-4 mb-8 items-center">
      <header className="my-[20px] text-[2rem]">{hall.name}</header>
      <img src={screenIcon} className="w-[43rem]" alt="Screen" />
    </div>
  );
}
