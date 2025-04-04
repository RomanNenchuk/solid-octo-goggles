import MovieList from "../components/MovieList";

export default function Home() {
  return (
    <div className="h-full bg-[#221F1F] text-white">
      <MovieList className="py-4 px-8 max-w-[1302px] mx-auto" />
    </div>
  );
}
