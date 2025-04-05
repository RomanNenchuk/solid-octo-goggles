import { useNavigate } from "react-router-dom";
import cinemaIcon from "../assets/cinema.svg";
import menuIcon from "../assets/menu.svg";

type HeaderControlsProps = {
  setIsNavigationMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
};

export default function HeaderControls({
  setIsNavigationMenuOpen,
  className,
}: HeaderControlsProps) {
  const navigate = useNavigate();

  const handleCinemaClick = () => {
    navigate("/");
    setIsNavigationMenuOpen(false);
  };
  const toggleMenu = () => setIsNavigationMenuOpen(prev => !prev);

  return (
    <div className={`flex gap-8 ${className}`}>
      <img
        src={menuIcon}
        alt="Menu"
        onClick={toggleMenu}
        className="cursor-pointer"
      />
      <img
        src={cinemaIcon}
        alt="Cinema"
        onClick={handleCinemaClick}
        className="cursor-pointer"
      />
    </div>
  );
}
