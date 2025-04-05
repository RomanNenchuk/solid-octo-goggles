import { ShowTime } from "./MovieList";
import ShowTimeLabel from "./ShowTimeLabel";

type ShowTimeListProps = {
  showTimes: ShowTime[];
};

export default function ShowTimeList({ showTimes }: ShowTimeListProps) {
  return (
    <ul className="flex flex-wrap">
      {showTimes.map(showTime => (
        <ShowTimeLabel key={showTime.id} showTime={showTime} />
      ))}
    </ul>
  );
}
