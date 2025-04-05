import React, { useEffect } from "react";
import HeaderControls from "../HeaderControls";
import PageNavList from "./PageNavList";

type SidebarProps = {
  setIsNavigationMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({ setIsNavigationMenuOpen }: SidebarProps) {
  useEffect(() => {
    const handleClickOutside = () => setIsNavigationMenuOpen(false);
    document.addEventListener("mousedown", handleClickOutside);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 h-full w-full bg-[#221f1f80] backdrop-filter backdrop-blur-[5px]">
      <div className="h-full w-[20%] min-w-70 bg-[#221f1f] border-r border-solid border-white/15 flex flex-col text-[22px] leading-8 font-medium relative">
        <HeaderControls
          setIsNavigationMenuOpen={setIsNavigationMenuOpen}
          className="absolute top-[12px] left-[12px]"
        />
        <PageNavList />
      </div>
    </div>
  );
}
