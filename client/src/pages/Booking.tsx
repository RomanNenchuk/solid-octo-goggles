import BookingSidebar from "../components/Booking/BookingSidebar";
import CinemaHall from "../components/Hall/CinemaHall";

export default function Booking() {
  return (
    <div className="flex relative justify-between">
      <CinemaHall />
      <BookingSidebar />
    </div>
  );
}
