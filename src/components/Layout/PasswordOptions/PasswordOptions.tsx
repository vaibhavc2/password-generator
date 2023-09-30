import React, { Dispatch, SetStateAction } from "react";
import FlexContainer from "../../UI/FlexContainer";
import LengthInput from "./LengthInput";
import IncludeNumbersInput from "./IncludeNumbersInput";
import IncludeSpecialCharactersInput from "./IncludeSpecialCharactersInput";

type PasswordOptionsTypes = {
  length: number;
  includeNumbers: boolean;
  includeSpecialCharacters: boolean;
  setLength: Dispatch<SetStateAction<number>>;
  setIncludeNumbers: Dispatch<SetStateAction<boolean>>;
  setIncludeSpecialCharacters: Dispatch<SetStateAction<boolean>>;
};

const PasswordOptions = ({
  length,
  includeNumbers,
  includeSpecialCharacters,
  setLength,
  setIncludeNumbers,
  setIncludeSpecialCharacters
}: PasswordOptionsTypes) => {
  return (
    <FlexContainer className="gap-x-2 space-x-8 py-5 text-base text-orange-500">
      <LengthInput length={length} setLength={setLength} />
      <IncludeNumbersInput
        includeNumbers={includeNumbers}
        setIncludeNumbers={setIncludeNumbers}
      />
      <IncludeSpecialCharactersInput
        includeSpecialCharacters={includeSpecialCharacters}
        setIncludeSpecialCharacters={setIncludeSpecialCharacters}
      />
    </FlexContainer>
  );
};

export default PasswordOptions;
