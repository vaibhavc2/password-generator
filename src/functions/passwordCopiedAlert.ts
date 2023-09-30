export const passwordCopiedAlert = () => {
  const element = document.getElementById("copy-alert");
  element?.classList.toggle("invisible");
  setTimeout(() => {
    element?.classList.toggle("invisible");
  }, 1000);
};
