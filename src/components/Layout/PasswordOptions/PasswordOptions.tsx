import React, { Dispatch, SetStateAction } from "react";
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
    <div className="wrap mx-auto w-full gap-x-2 overflow-hidden py-5 pl-6 text-lg text-orange-500 sm:flex sm:space-x-5">
      <LengthInput length={length} setLength={setLength} />
      <IncludeNumbersInput
        includeNumbers={includeNumbers}
        setIncludeNumbers={setIncludeNumbers}
      />
      <IncludeSpecialCharactersInput
        includeSpecialCharacters={includeSpecialCharacters}
        setIncludeSpecialCharacters={setIncludeSpecialCharacters}
      />
    </div>
  );
};

export default PasswordOptions;
