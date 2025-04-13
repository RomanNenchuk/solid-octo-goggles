import { MovieType } from "./MovieList";

type MovieCardCoverProps = Pick<MovieType, "cover" | "name"> & {
  onClick: VoidFunction;
  className?: string;
};

export default function MovieCardCover({
  cover,
  name,
  className,
  onClick,
}: MovieCardCoverProps) {
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <div className={className}>
        <img
          src={cover}
          alt={name}
          className="w-full h-full min-w-full object-cover object-center"
        />
      </div>
      <h3 className="bg-[#00000080] w-full p-2 text-lg leading-5 font-bold absolute bottom-0 left-0 break-all block lg:hidden">
        {name}
      </h3>
    </div>
  );
}
