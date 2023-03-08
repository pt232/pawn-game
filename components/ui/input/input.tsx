import React from "react";

type InputProps = {} & React.InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputProps, ref: React.Ref<HTMLInputElement>) {
  return (
    <input
      ref={ref}
      className="w-full rounded-md bg-secondary-700 py-2 px-3 text-white placeholder:text-secondary-300"
      {...props}
    />
  );
}

export default React.forwardRef(Input);
