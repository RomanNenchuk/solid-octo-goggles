import { ShowTime } from "./MovieList";
import ShowTimeLabel from "./ShowTimeLabel";

type ShowTimeListProps = {
  showTimes: ShowTime[];
  className?: string;
};

export default function ShowTimeList({
  showTimes,
  className,
}: ShowTimeListProps) {
  return (
    <ul className={`flex flex-wrap ${className}`}>
      {showTimes.map(showTime => (
        <ShowTimeLabel key={showTime.id} showTime={showTime} />
      ))}
    </ul>
  );
}
