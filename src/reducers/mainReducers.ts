import { ReducerType } from "./../types/reducerType";
const localLight = localStorage.getItem("isLight");
const token = localStorage.getItem("token");
export type ThemeDarkType = boolean;
export type InitialLoggedType = boolean;
export const initialThemeDark: ThemeDarkType =
  localLight === "true" ? true : false;
export const initialIsLogged: InitialLoggedType = token ? true : false;

export const ThemeDark = (state: ThemeDarkType, action: ReducerType) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      if (action.payload) return action.payload as boolean;
      else return !state;
  }
  return state;
};
export const isLogged = (state: InitialLoggedType, action: ReducerType) => {
  switch (action.type) {
    case "LOGIN":
      return true;
      break;
    case "LOGOUT":
      return false;
      break;
  }
  return state;
};
