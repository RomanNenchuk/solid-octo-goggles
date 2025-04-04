import { Movie } from "./MovieList";

type MovieCardTextInfoProps = Pick<
  Movie,
  "name" | "description" | "genre" | "date"
> & {
  description?: string;
  genre?: string;
  className?: string;
};

export default function MovieCardTextInfo({
  name,
  genre,
  date,
  description,
  className,
}: MovieCardTextInfoProps) {
  return (
    <div className={className}>
      <h3 className="text-lg leading-5 font-bold">{name}</h3>
      {genre && <div>{genre}</div>}
      {date && <div>{date}</div>}
      {description && <div>{description}</div>}
    </div>
  );
}
