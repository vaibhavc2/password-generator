import React, { ComponentProps, Fragment, MutableRefObject } from "react";
import { twMerge } from "tailwind-merge";

type InputTypes = {
  label: string;
  innerRef?: MutableRefObject<HTMLInputElement | null>;
} & ComponentProps<"input">;

const Input = ({
  className,
  id,
  label,
  innerRef,
  ...restProps
}: InputTypes) => {
  return (
    <Fragment>
      <input
        id={id}
        className={twMerge("w-full outline-1", className)}
        {...restProps}
        ref={innerRef}
      />
      <label htmlFor={id} className="w-full">
        {label}
      </label>
    </Fragment>
  );
};

export default Input;
