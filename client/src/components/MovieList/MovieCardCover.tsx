import { MovieType } from "./MovieList";

type MovieCardCoverProps = Pick<MovieType, "cover" | "name"> & {
  onClick: VoidFunction;
  className?: string;
};

export default function MovieCardCover({
  cover,
  name,
  onClick,
}: MovieCardCoverProps) {
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <div className="w-full h-[350px] sm:h-[300px] lg:w-[60%] lg:h-[300px] lg:w-[200px] xl:h-[224px] xl:w-[140px] overflow-hidden rounded-lg flex-shrink-0">
        <img
          src={cover}
          alt={name}
          className="w-full h-full min-w-full object-cover object-top"
        />
      </div>
      <h3 className="bg-[#00000080] w-full p-2 text-lg leading-5 font-bold absolute bottom-0 left-0 break-all block lg:hidden">
        {name}
      </h3>
    </div>
  );
}
