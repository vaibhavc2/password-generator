import React, { ComponentProps, Fragment, MutableRefObject } from "react";
import { twMerge } from "tailwind-merge";

type InputTypes = {
  label: string;
  labelClass?: string;
  innerRef?: MutableRefObject<HTMLInputElement | null>;
} & ComponentProps<"input">;

const Input = ({
  className,
  id,
  label,
  innerRef,
  labelClass: labelClassName,
  ...restProps
}: InputTypes) => {
  return (
    <Fragment>
      <input
        id={id}
        className={twMerge(
          "mx-auto w-full accent-blue-700 outline-1",
          className
        )}
        {...restProps}
        ref={innerRef}
      />
      <label
        htmlFor={id}
        className={twMerge("w-full pl-8 sm:pl-0", labelClassName)}
      >
        {label}
      </label>
    </Fragment>
  );
};

export default Input;
