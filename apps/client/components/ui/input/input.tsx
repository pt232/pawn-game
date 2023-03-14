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
        "bg-secondary-700 placeholder:text-secondary-300 rounded-md py-2 px-3 text-white",
        className,
      )}
      {...props}
    />
  );
}

export default React.forwardRef(Input);
