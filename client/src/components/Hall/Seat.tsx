import React from "react";
import { SeatType } from "./CinemaHall";

type SeatProps = Pick<SeatType, "id" | "isOccupied" | "isSelected"> & {
  handleSelectSeat: (
    id: SeatType["id"],
    isOccupied: SeatType["isOccupied"]
  ) => void;
};

function Seat({ id, isOccupied, isSelected, handleSelectSeat }: SeatProps) {
  console.log("Render");

  return (
    <div
      className="bg-white border border-violet-700 transition-all duration-300 shadow-md cursor-pointer
        hover:shadow-violet-500/30 w-8 h-10 rounded-sm flex items-center justify-center text-white flex-shrink-0"
      style={{
        backgroundColor: isOccupied ? "black" : isSelected ? "#95c7f4" : "",
      }}
      onClick={() => handleSelectSeat(id, isOccupied)}
    />
  );
}

export default React.memo(Seat);
