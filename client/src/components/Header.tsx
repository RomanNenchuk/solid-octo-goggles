import { Outlet } from "react-router-dom";
import { useSearch } from "../contexts/SearchContext";
import QueryInput from "./QueryInput";
import HeaderControls from "./HeaderControls";
import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";

export default function Header() {
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);
  const { query, setQuery } = useSearch();

  return (
    <>
      <div className="w-full py-4 border-b border-solid border-white/15 fixed top-0 z-10 bg-[#221f1f]">
        <QueryInput query={query} setQuery={setQuery} />
        <HeaderControls
          setIsNavigationMenuOpen={setIsNavigationMenuOpen}
          className="absolute top-[12px] left-[12px]"
        />
        {isNavigationMenuOpen && (
          <Sidebar setIsNavigationMenuOpen={setIsNavigationMenuOpen} />
        )}
      </div>
      <div className="mt-[75px]">
        <Outlet />
      </div>
    </>
  );
}
