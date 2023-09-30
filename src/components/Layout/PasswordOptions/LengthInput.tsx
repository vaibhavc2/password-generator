import React, { Dispatch, SetStateAction, useRef } from "react";
import FlexContainer from "../../UI/FlexContainer";
import Input from "../../UI/Input";

type LengthInputTypes = {
  length: number;
  setLength: Dispatch<SetStateAction<number>>;
};

const LengthInput = ({ length, setLength }: LengthInputTypes) => {
  const inputLength = useRef<HTMLInputElement | null>(null);

  // const changeLengthHandler = (event: FormEvent<HTMLInputElement>) => {
  const changeLengthHandler = () => {
    // const length = event.currentTarget.value;
    const length = inputLength.current?.value;
    setLength(Number(length));
  };

  return (
    <FlexContainer className="items-center">
      <Input
        id="length"
        type="range"
        min={6}
        max={40}
        value={length}
        className="cursor-pointer outline-none"
        labelClass="sm:text-center"
        label={`Length: ${length}`}
        onChange={changeLengthHandler}
        innerRef={inputLength}
      />
    </FlexContainer>
  );
};

export default LengthInput;
