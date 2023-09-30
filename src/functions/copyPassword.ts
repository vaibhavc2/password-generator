import { RefObject } from "react";
import { passwordCopiedAlert } from "./passwordCopiedAlert";

export const copyPassword = async (
  password: string,
  length: number,
  passwordRef: RefObject<HTMLInputElement>
) => {
  try {
    await navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length);
    passwordCopiedAlert();
  } catch (err) {
    alert(`ERROR: ${err}`);
  }
};
