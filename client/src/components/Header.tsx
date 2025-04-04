import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="w-full h-[5vh]"></div>
      <Outlet />
    </>
  );
}
