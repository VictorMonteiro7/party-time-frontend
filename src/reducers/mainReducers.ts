import { ReducerType } from "./../types/reducerType";
const localLight = localStorage.getItem("isLight");
export type ThemeDarkType = boolean;
export const initialThemeDark: ThemeDarkType =
  localLight === "true" ? true : false;
export const ThemeDark = (state: ThemeDarkType, action: ReducerType) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      if (action.payload) return action.payload as boolean;
      else return !state;
  }
  return state;
};
