import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const Heading = ({
  children,
  className,
  ...restProps
}: ComponentProps<"h1">) => {
  return (
    <h1
      className={twMerge(
        "text-center text-2xl font-bold dark:text-slate-100",
        className
      )}
      {...restProps}
    >
      {children}
    </h1>
  );
};

export default Heading;
