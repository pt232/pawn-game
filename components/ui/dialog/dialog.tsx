import { useId } from "react";
import { X } from "lucide-react";

type DialogProps = {
  isOpen: boolean;
  title: string;
  close: () => void;
} & React.DialogHTMLAttributes<HTMLDialogElement>;

export default function Dialog({
  children,
  id,
  isOpen,
  title,
  close,
  ...props
}: DialogProps) {
  const titleId = useId();
  const bodyId = useId();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50"
          aria-hidden="true"
          onClick={close}
        />
      )}
      <dialog
        id={id}
        open={isOpen}
        className="fixed top-32 z-20 w-10/12 max-w-md rounded-md bg-secondary-900 p-4 text-white shadow-md"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={bodyId}
        {...props}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 id={titleId} className="text-lg font-medium">
            {title}
          </h2>
          <button onClick={close} aria-label="Close Dialog">
            <X
              className="text-secondary-300 transition-colors hover:text-white"
              size={18}
              strokeWidth={3}
            />
          </button>
        </div>
        <div id={bodyId}>{children}</div>
      </dialog>
    </>
  );
}
