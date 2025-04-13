import { MovieType } from "./MovieList";

type MovieCardTextInfoProps = Pick<
  MovieType,
  "name" | "description" | "genre"
> & {
  description?: string;
  genre?: string;
  onClick: VoidFunction;
  className?: string;
};

export default function MovieCardTextInfo({
  name,
  genre,
  description,
  onClick,
}: MovieCardTextInfoProps) {
  return (
    <>
      <h3
        className="text-lg leading-5 font-bold  break-all hidden lg:block cursor-pointer"
        onClick={onClick}
      >
        {name}
      </h3>
      {genre && <div>{genre}</div>}
      {description && <div>{description}</div>}
    </>
  );
}
