import { passwordCopiedAlert } from "./passwordCopiedAlert";

export const copyPassword = async (password: string) => {
  try {
    await navigator.clipboard.writeText(password);
    // alert("Password Copied");
    passwordCopiedAlert();
  } catch (err) {
    alert(`ERROR: ${err}`);
  }
};
