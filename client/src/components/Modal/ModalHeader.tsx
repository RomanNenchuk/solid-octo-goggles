import { MouseEvent } from "react";
import Cross from "../Cross";

type ModalHeaderProps = {
  title: string;
  onClick: (e: MouseEvent) => void;
};

export default function ModalHeader({ title, onClick }: ModalHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-semibold text-[#000]">{title}</h3>
      <Cross onClick={onClick} />
    </div>
  );
}
