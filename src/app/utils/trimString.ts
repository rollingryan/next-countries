const trimString = (string: string, length: number) =>
  (string.length > length &&
    length > 0 &&
    string.substring(0, length) + "...") ||
  string;

export default trimString;
