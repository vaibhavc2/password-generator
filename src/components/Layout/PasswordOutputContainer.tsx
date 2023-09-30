import React from "react";
import FlexContainer from "../UI/FlexContainer";
import Button from "../UI/Button";
import { copyPassword } from "../../functions/copyPassword";

type PasswordContainerTypes = {
  password: string;
};

const PasswordOutputContainer = ({ password }: PasswordContainerTypes) => {
  return (
    <FlexContainer className="mx-auto mb-4 h-10 max-w-lg rounded-lg shadow">
      <input
        id="password"
        type="text"
        value={password}
        className="w-full max-w-lg px-3 py-1 font-mono outline-none"
        placeholder="password"
        readOnly={true}
      />
      <Button
        onClick={() => {
          copyPassword(password);
        }}
        className="bg-blue-700 px-3 py-1 text-lg text-white outline-none hover:bg-blue-800 sm:ml-[-0.5rem]"
      >
        copy
      </Button>
    </FlexContainer>
  );
};

export default PasswordOutputContainer;
