export const stringShortener = (text: string, maxStringLength: number) => {
  if (text.length > maxStringLength) {
    return `${text.slice(0, maxStringLength - 3)}...`;
  } else {
    return text;
  }
};

export const captitalizeString = (text: string) => {
  const textCopy = text.split("");
  textCopy[0] = textCopy[0].toUpperCase();
  return textCopy.join("");
};

export const shortenAndCapitalizeString = (
  text: string,
  maxStringLength: number
) => {
  const capitalizedString = captitalizeString(text);
  return stringShortener(capitalizedString, maxStringLength);
};
