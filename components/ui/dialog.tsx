import { X } from "lucide-react";

type DialogProps = {
  hasCloseBtn: boolean;
} & React.DialogHTMLAttributes<HTMLDialogElement>;

export default function Dialog({ children, hasCloseBtn }: DialogProps) {
  return (
    <>
      <div className="fixed inset-0 z-10 bg-black bg-opacity-40" />
      <dialog
        open
        className="fixed inset-0 z-20 w-full max-w-lg rounded-md bg-secondary-900 p-6 text-white shadow-md"
      >
        {hasCloseBtn && (
          <button className="absolute top-4 right-4">
            <X
              className="text-secondary-300 transition-colors hover:text-white"
              size={18}
              strokeWidth={3}
            />
          </button>
        )}
        <div>{children}</div>
      </dialog>
    </>
  );
}
