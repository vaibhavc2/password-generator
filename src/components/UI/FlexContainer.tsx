import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const FlexContainer = ({
  children,
  className,
  ...restProps
}: ComponentProps<"div">) => {
  return (
    <div className={twMerge("flex overflow-hidden", className)} {...restProps}>
      {children}
    </div>
  );
};

export default FlexContainer;
