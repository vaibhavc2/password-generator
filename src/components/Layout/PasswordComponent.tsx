import React, { useCallback, useEffect, useState } from "react";

import { passwordGenerator as generatorFunction } from "../../functions/passwordGenerator";

import PasswordOutputContainer from "./PasswordOutputContainer";
import PasswordOptions from "./PasswordOptions/PasswordOptions";
import CopyAlert from "../UI/CopyAlert";

const PasswordComponent = () => {
  const [length, setLength] = useState<number>(8);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSpecialCharacters, setIncludeSpecialCharacters] =
    useState<boolean>(true);
  const [password, setPassword] = useState<string>("");

  const passwordSetter = () => {
    setPassword(
      generatorFunction(length, includeNumbers, includeSpecialCharacters)
    );
  };

  // useCallback returns an optimised version of the input callback function, which uses techniques like memoisation and caching
  const passwordGenerator = useCallback(passwordSetter, [
    length,
    includeNumbers,
    includeSpecialCharacters,
    setPassword
  ]);

  useEffect(() => {
    passwordGenerator();
  }, [length, includeNumbers, includeSpecialCharacters]);

  return (
    <div className="mt-20 px-5">
      <form className="mx-auto my-8 w-full max-w-xl rounded-lg border border-gray-600 bg-gray-400 bg-opacity-30 bg-clip-padding px-4 pt-10 shadow-md shadow-gray-600 backdrop-blur-sm backdrop-filter">
        <CopyAlert id="copy-alert" />
        <PasswordOutputContainer password={password} />
        <PasswordOptions
          length={length}
          includeNumbers={includeNumbers}
          includeSpecialCharacters={includeSpecialCharacters}
          setLength={setLength}
          setIncludeNumbers={setIncludeNumbers}
          setIncludeSpecialCharacters={setIncludeSpecialCharacters}
        />
      </form>
    </div>
  );
};

export default PasswordComponent;
