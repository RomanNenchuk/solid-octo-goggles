import PageNavItem from "./PageNavItem";

export default function PageNavList() {
  return (
    <div className="mt-[100px] flex flex-col">
      <PageNavItem to="/" caption="Головна" />
      <PageNavItem to="/booking" caption="Бронювання" />
    </div>
  );
}
