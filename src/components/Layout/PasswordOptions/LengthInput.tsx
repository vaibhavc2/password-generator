import React, { Dispatch, FormEvent, SetStateAction, useRef } from "react";
import FlexContainer from "../../UI/FlexContainer";
import Input from "../../UI/Input";

type LengthInputTypes = {
  length: number;
  setLength: Dispatch<SetStateAction<number>>;
};

const LengthInput = ({ length, setLength }: LengthInputTypes) => {
  const inputLength = useRef<HTMLInputElement | null>(null);

  const changeLengthHandler = (event: FormEvent<HTMLInputElement>) => {
    const length = event.currentTarget.value;
    // const length = inputLength.current?.focus();
    setLength(Number(length));
  };

  return (
    <FlexContainer className="items-center gap-x-1">
      <Input
        id="length"
        type="range"
        min={6}
        max={40}
        value={length}
        className="cursor-pointer outline-none"
        label={`Length: ${length}`}
        onChange={changeLengthHandler}
        innerRef={inputLength}
      />
    </FlexContainer>
  );
};

export default LengthInput;