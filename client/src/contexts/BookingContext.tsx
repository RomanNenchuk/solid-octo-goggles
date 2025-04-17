import {
  createContext,
  useContext,
  ReactNode,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import { fetchShowTimeInfo } from "../services/showTimes";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { Hall } from "../components/Hall/CinemaHall";

type BookingContextType = {
  hall: Hall;
  setHall: React.Dispatch<SetStateAction<Hall>>;
  isLoading: boolean;
  refetch: VoidFunction;
};

const SearchContext = createContext<BookingContextType>({
  hall: { name: "", totalSeats: 0, seats: [] },
  setHall: () => {},
  isLoading: false,
  refetch: () => {},
});

export const useBooking = () => {
  const context = useContext(SearchContext);
  if (context === undefined)
    throw new Error("useBooking must be used within a BookingProvider");

  return context;
};

export function BookingProvider({ children }: { children: ReactNode }) {
  const { id: showTimeId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [hall, setHall] = useState<Hall>({
    name: "",
    totalSeats: 0,
    seats: [],
  });

  async function getShowTimeInfo() {
    if (!showTimeId) return;
    try {
      const showTimeInfo = await fetchShowTimeInfo({ id: showTimeId });
      setHall(showTimeInfo);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  useEffect(() => {
    try {
      setIsLoading(true);
      getShowTimeInfo();
    } finally {
      setIsLoading(false);
    }
  }, [showTimeId]);

  if (isLoading || !hall) return <LoadingSpinner />;

  return (
    <SearchContext.Provider
      value={{
        hall: hall,
        setHall: setHall,
        isLoading,
        refetch: getShowTimeInfo,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
