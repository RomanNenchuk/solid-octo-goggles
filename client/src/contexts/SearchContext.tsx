import {
  createContext,
  useContext,
  ReactNode,
  useState,
  SetStateAction,
} from "react";
import { useDebounce } from "use-debounce";

type SearchContextType = {
  debouncedQuery: string;
  query: string;
  setQuery: React.Dispatch<SetStateAction<string>>;
};

const SearchContext = createContext<SearchContextType>({
  debouncedQuery: "",
  query: "",
  setQuery: () => {},
});

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined)
    throw new Error("useSearch must be used within a SearchProvider");

  return context;
};

export function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 300);

  return (
    <SearchContext.Provider
      value={{
        debouncedQuery,
        query,
        setQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
