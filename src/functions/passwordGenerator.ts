export const passwordGenerator = (
  length: number,
  includeNumbers: boolean,
  includeSpecialCharacters: boolean
): string => {
  let password: string = "";
  let base = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

  if (includeNumbers) base += "1234567890";
  if (includeSpecialCharacters) base += "!@#$%^&*()_-+{}<>?*/|[]~`";

  for (let i = 0; i < length; i++) {
    let char = base[Math.floor(Math.random() * base.length)];
    password += char;
  }

  return password;
};
