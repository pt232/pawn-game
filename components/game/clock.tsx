import clsx from "clsx";
import { Clock12 } from "lucide-react";

type ClockProps = {
  color: "white" | "black";
};

export default function Clock({ color }: ClockProps) {
  return (
    <div
      className={clsx(
        "flex w-max items-center gap-2 rounded-md py-1 px-3 text-lg font-medium",
        { "bg-secondary-300 text-secondary-900": color === "white" },
        { "bg-secondary-900 text-secondary-300": color === "black" },
      )}
    >
      <Clock12 size={18} />
      05:00
    </div>
  );
}
