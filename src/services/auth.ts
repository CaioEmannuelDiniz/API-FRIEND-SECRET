import { getToday } from "../utils/getToday";

export const validatePassword = (password: string): boolean => {
  const currrentPassword = getToday().split("/").join("");

  return password === currrentPassword;
};

export const createToken = () => {
  const currrentPassword = getToday().split("/").join("");

  return `${process.env.DEFAULT_TOKEN}${currrentPassword}`;
};

export const validateTOKEN = (token: string) => {
  const currentToken = createToken();

  return token === currentToken;
};
