import PageNavItem from "./PageNavItem";

type PageNavListType = {
  closeNavigationMenu: VoidFunction;
};

export default function PageNavList({ closeNavigationMenu }: PageNavListType) {
  return (
    <div className="mt-[100px] flex flex-col">
      <PageNavItem to="/" caption="Головна" onClick={closeNavigationMenu} />
      <PageNavItem
        to="/bookings"
        caption="Бронювання"
        onClick={closeNavigationMenu}
      />
    </div>
  );
}
