import React, { Dispatch, SetStateAction } from "react";
import FlexContainer from "../../UI/FlexContainer";
import Input from "../../UI/Input";

type IncludeSpecialCharactersInputTypes = {
  includeSpecialCharacters: boolean;
  setIncludeSpecialCharacters: Dispatch<SetStateAction<boolean>>;
};

const IncludeSpecialCharactersInput = ({
  includeSpecialCharacters,
  setIncludeSpecialCharacters
}: IncludeSpecialCharactersInputTypes) => {
  const changeInputHandler = () => {
    setIncludeSpecialCharacters((prev: boolean) => !prev);
  };

  return (
    <FlexContainer className="items-center gap-x-1">
      <Input
        id="special-chars"
        type="checkbox"
        // defaultChecked={includeSpecialCharacters}
        checked={includeSpecialCharacters}
        className="cursor-pointer outline-none"
        label={`Characters`}
        onChange={changeInputHandler}
      />
    </FlexContainer>
  );
};

export default IncludeSpecialCharactersInput;
