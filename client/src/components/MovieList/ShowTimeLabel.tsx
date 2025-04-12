import { Link } from "react-router-dom";
import { ShowTime } from "./MovieList";

type ShowTimeLabelProps = {
  showTime: ShowTime;
};

export default function ShowTimeLabel({ showTime }: ShowTimeLabelProps) {
  const date =
    typeof showTime.startTime === "string"
      ? new Date(showTime.startTime)
      : showTime.startTime;

  const formattedTime = date.toLocaleString("uk-UA", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <Link to={`/bookings/${showTime.id}`}>
      <span className="p-1 text-[#57FFB0] font-bold cursor-pointer">
        {formattedTime}
      </span>
    </Link>
  );
}
