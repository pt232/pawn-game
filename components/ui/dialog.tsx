import { X } from "lucide-react";

type DialogProps = {
  children: React.ReactNode;
  isOpen: boolean;
  title: string;
  close: () => void;
};

export default function Dialog({
  children,
  isOpen,
  title,
  close,
}: DialogProps) {
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
        open={isOpen}
        className="fixed z-20 w-10/12 max-w-md rounded-md bg-secondary-900 p-4 text-white shadow-md"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={close}>
            <X
              className="text-secondary-300 transition-colors hover:text-white"
              size={18}
              strokeWidth={3}
            />
          </button>
        </div>
        {children}
      </dialog>
    </>
  );
}
