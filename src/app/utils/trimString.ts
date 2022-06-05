const trimString = (string: string, length: number) =>
  string.length > length ? string.substring(0, length) + "..." : string;

export default trimString;
