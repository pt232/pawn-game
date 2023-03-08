import React from "react";
import clsx from "clsx";

type InputProps = {} & React.InputHTMLAttributes<HTMLInputElement>;

function Input(
  { className, ...props }: InputProps,
  ref: React.Ref<HTMLInputElement>,
) {
  return (
    <input
      ref={ref}
      className={clsx(
        "rounded-md bg-secondary-700 py-2 px-3 text-white placeholder:text-secondary-300",
        className,
      )}
      {...props}
    />
  );
}

export default React.forwardRef(Input);
