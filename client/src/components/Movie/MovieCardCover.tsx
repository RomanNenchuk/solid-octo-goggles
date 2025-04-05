import { Movie } from "./MovieList";

type MovieCardCoverProps = Pick<Movie, "cover"> & {
  className?: string;
};

export default function MovieCardCover({ cover }: MovieCardCoverProps) {
  return (
    <div className="h-[230px] w-[140px] overflow-hidden rounded-sm">
      <img src={cover} alt="Cover" className="w-full h-full object-cover" />
    </div>
  );
}
