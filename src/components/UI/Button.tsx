import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const Button = ({
  children,
  className,
  ...restProps
}: ComponentProps<"button">) => {
  return (
    <button
      type="button"
      className={twMerge(
        "shrink-0 bg-gray-300 px-3 py-1 text-slate-950 outline-1",
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
