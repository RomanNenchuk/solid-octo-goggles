import React from "react";
import searchIcon from "../../assets/search.svg";

type QueryInputProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export default function QueryInput({ query, setQuery }: QueryInputProps) {
  return (
    <div className="relative max-w-[calc(100%-200px)] sm:max-w-md ml-auto mr-8 md:mr-auto">
      <input
        type="text"
        className="w-full px-5 py-3 rounded-2xl bg-[#1e1e2f] text-white placeholder-gray-400 
        focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent 
        border border-violet-700 transition-all duration-300 shadow-md 
        hover:shadow-violet-500/30 focus:shadow-violet-400/30"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Шукати..."
      />
      <img
        src={searchIcon}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg"
      />
    </div>
  );
}
