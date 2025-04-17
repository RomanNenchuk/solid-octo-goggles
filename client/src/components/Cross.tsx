import { MouseEvent } from "react";

type CrossProps = {
  onClick: (e: MouseEvent) => void;
  color?: string;
  hoverColor?: string;
};

export default function Cross({ onClick, color = "#000" }: CrossProps) {
  return (
    <div onClick={onClick} className="cursor-pointer" style={{ color }}>
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
}
