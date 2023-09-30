import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const FlexContainer = ({
  children,
  className,
  ...restProps
}: ComponentProps<"div">) => {
  return (
    <div
      className={twMerge("flex overflow-hidden sm:gap-x-2", className)}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
