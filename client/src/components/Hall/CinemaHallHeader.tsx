import screenIcon from "../../assets/screen.svg";

export default function CinemaHallHeader({ hallName }: { hallName: string }) {
  return (
    <div className="flex flex-col gap-4 mb-8 items-center">
      <header className="my-[20px] text-[2rem]">{hallName}</header>
      <img src={screenIcon} className="w-[43rem]" alt="Screen" />
    </div>
  );
}
