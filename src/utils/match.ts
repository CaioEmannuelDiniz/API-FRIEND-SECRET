import { match } from "assert";

export const encrypyMatch = (id: number): string => {
  return `${process.env.DEFAULT_TOKEN}${process.env.DEFAULT_TOKEN}`;
};

export const decryptMatch = (match: string): number => {
  let idString: string = match
    .replace(`${process.env.DEFAULT_TOKEN}`, "")
    .replace(`${process.env.DEFAULT_TOKEN}`, "");

  return parseInt(idString);
};
