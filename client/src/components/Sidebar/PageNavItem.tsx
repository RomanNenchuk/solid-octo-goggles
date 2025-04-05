import { Link } from "react-router-dom";

type PageNavItemProps = {
  to: string;
  caption: string;
  className?: string;
};

export default function PageNavItem({
  to,
  caption,
  className,
}: PageNavItemProps) {
  return (
    <Link to={to} className={`px-4 py-2 ${className}`}>
      {caption}
    </Link>
  );
}
