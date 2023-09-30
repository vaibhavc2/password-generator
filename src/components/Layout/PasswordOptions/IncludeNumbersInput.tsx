import React, { Dispatch, SetStateAction } from "react";
import FlexContainer from "../../UI/FlexContainer";
import Input from "../../UI/Input";

type IncludeNumbersInputTypes = {
  includeNumbers: boolean;
  setIncludeNumbers: Dispatch<SetStateAction<boolean>>;
};

const IncludeNumbersInput = ({
  includeNumbers,
  setIncludeNumbers
}: IncludeNumbersInputTypes) => {
  const changeInputHandler = () => {
    setIncludeNumbers((prev: boolean) => !prev);
  };

  return (
    <FlexContainer className="items-center gap-x-1">
      <Input
        id="numbers"
        type="checkbox"
        // defaultChecked={includeNumbers}
        checked={includeNumbers}
        className="cursor-pointer outline-none"
        label={`Numbers`}
        onChange={changeInputHandler}
      />
    </FlexContainer>
  );
};

export default IncludeNumbersInput;
