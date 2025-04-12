import { Link } from "react-router-dom";

type PageNavItemProps = {
  to: string;
  caption: string;
  onClick: VoidFunction;
  className?: string;
};

export default function PageNavItem({
  to,
  caption,
  onClick,
  className,
}: PageNavItemProps) {
  return (
    <Link to={to} className={`px-4 py-2 ${className}`} onClick={onClick}>
      {caption}
    </Link>
  );
}
