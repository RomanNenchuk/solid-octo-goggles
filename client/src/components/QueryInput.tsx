import React from "react";

type QueryInputProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export default function QueryInput({ query, setQuery }: QueryInputProps) {
  return (
    <div className="relative max-w-md mx-auto">
      <input
        type="text"
        className="text-base text-black bg-white rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 py-2 px-4 w-full outline-none transition-all duration-200 placeholder-gray-400"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
        🔍
      </span>
    </div>
  );
}
