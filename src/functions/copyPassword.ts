export const copyPassword = async (password: string) => {
  try {
    await navigator.clipboard.writeText(password);
    alert("Password Copied");
  } catch (err) {
    alert(`ERROR: ${err}`);
  }
};
