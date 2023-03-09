import { useId, useState } from "react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

type AccordionItemProps = {
  children: React.ReactNode;
  title: string;
};

export default function AccordionItem({ children, title }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const itemHeadId = useId();
  const itemBodyId = useId();

  return (
    <div className="border-b border-b-secondary-400">
      <button
        id={itemHeadId}
        className="group flex w-full items-center justify-between gap-x-4 py-4"
        aria-expanded={isOpen ? "true" : "false"}
        aria-controls={itemBodyId}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h3 className="group-hover:underline">{title}</h3>
        <ChevronDown
          size={18}
          className={clsx(
            { "rotate-180": isOpen },
            { "rotate-0": !isOpen },
            "transition-transform duration-300",
          )}
        />
      </button>
      <div
        role="region"
        id={itemBodyId}
        className={clsx(
          { "max-h-56 pb-4": isOpen },
          { "max-h-0": !isOpen },
          "w-full overflow-y-hidden text-secondary-300 transition-all duration-300",
        )}
        aria-labelledby={itemHeadId}
      >
        {children}
      </div>
    </div>
  );
}
