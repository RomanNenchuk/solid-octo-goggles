import {
  createContext,
  useContext,
  ReactNode,
  useState,
  SetStateAction,
} from "react";
import { SeatType } from "../components/Hall/CinemaHall";

type BookingContextType = {
  selectedSeats: SeatType[];
  setSelectedSeats: React.Dispatch<SetStateAction<SeatType[]>>;
};

const SearchContext = createContext<BookingContextType>({
  selectedSeats: [],
  setSelectedSeats: () => {},
});

export const useBooking = () => {
  const context = useContext(SearchContext);
  if (context === undefined)
    throw new Error("useBooking must be used within a BookingProvider");

  return context;
};

export function BookingProvider({ children }: { children: ReactNode }) {
  const [selectedSeats, setSelectedSeats] = useState<SeatType[]>([]);

  return (
    <SearchContext.Provider
      value={{
        selectedSeats,
        setSelectedSeats,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
