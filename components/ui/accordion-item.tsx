import { ChevronDown } from "lucide-react";
import { useState } from "react";

type AccordionItemProps = {
  children: React.ReactNode;
  title: string;
};

export default function AccordionItem({ children, title }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-b-secondary-400">
      <button
        className="group flex w-full items-center justify-between gap-x-4   py-4"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h3 className="group-hover:underline">{title}</h3>
        <ChevronDown
          size={18}
          className={`${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform duration-300`}
        />
      </button>
      <div
        className={`${
          isOpen ? "max-h-56 pb-4" : "max-h-0"
        } w-full overflow-y-hidden text-secondary-300 transition-all duration-300`}
      >
        {children}
      </div>
    </div>
  );
}
