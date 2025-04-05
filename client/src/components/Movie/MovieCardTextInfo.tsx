import { Movie } from "./MovieList";
import ShowTimeList from "./ShowTimeList";

type MovieCardTextInfoProps = Pick<
  Movie,
  "name" | "description" | "genre" | "showTimes"
> & {
  description?: string;
  genre?: string;
  className?: string;
};

export default function MovieCardTextInfo({
  name,
  genre,
  showTimes,
  description,
  className,
}: MovieCardTextInfoProps) {
  return (
    <div className={`${className} flex flex-col gap-4`}>
      <h3 className="text-lg leading-5 font-bold">{name}</h3>
      {genre && <div>{genre}</div>}
      {showTimes?.length ? <ShowTimeList showTimes={showTimes} /> : null}
      {description && <div>{description}</div>}
    </div>
  );
}
