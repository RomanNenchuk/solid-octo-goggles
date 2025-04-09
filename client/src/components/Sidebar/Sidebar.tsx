import React, { useEffect, useRef } from "react";
import HeaderControls from "../Header/HeaderControls";
import PageNavList from "./PageNavList";

type SidebarProps = {
  isNavigationMenuOpen: boolean;
  setIsNavigationMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({
  isNavigationMenuOpen,
  setIsNavigationMenuOpen,
}: SidebarProps) {
  const sideBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sideBarRef?.current && !sideBarRef.current.contains(e.target as Node))
        setIsNavigationMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`${
        isNavigationMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } fixed top-0 left-0 h-full w-full bg-[#221f1f80] backdrop-filter backdrop-blur-[5px]`}
    >
      <div
        ref={sideBarRef}
        className={`h-full w-[20%] min-w-70 bg-[#221f1f] 
        border-r border-solid border-white/15 
        flex flex-col text-[22px] leading-8 font-medium relative
        transform transition-transform duration-300 ease-in-out
        ${isNavigationMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <HeaderControls
          setIsNavigationMenuOpen={setIsNavigationMenuOpen}
          className="absolute top-[12px] left-[12px]"
        />
        <PageNavList />
      </div>
    </div>
  );
}
