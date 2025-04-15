import { MouseEvent } from "react";

type ModalHeaderProps = {
  title: string;
  onClick: (e: MouseEvent) => void;
};

export default function ModalHeader({ title, onClick }: ModalHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-semibold text-[#000]">{title}</h3>
      <div
        onClick={onClick}
        className="text-[#000] hover:text-[#666] transition-colors duration-200 cursor-pointer"
      >
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
    </div>
  );
}
