import Cross from "../Cross";
import { SeatType } from "../Hall/CinemaHall";

type BookedSeatItemProps = {
  seat: SeatType;
  handleCrossClick: (id: SeatType["id"]) => void;
};

export default function BookedSeatItem({
  seat,
  handleCrossClick,
}: BookedSeatItemProps) {
  return (
    <div className="border-[1px] border-[solid] border-[#ccc] p-2 mr-2 flex justify-between">
      <span>
        {seat.row} ряд {seat.column} місце
      </span>
      <Cross onClick={() => handleCrossClick(seat.id)} color="#fff" />
    </div>
  );
}
