import React, { useReducer, createContext } from "react";
import {
  ThemeDark,
  ThemeDarkType,
  initialThemeDark,
  InitialLoggedType,
  initialIsLogged,
  isLogged,
} from "../reducers/mainReducers";
import { ReducerType } from "../types/reducerType";

type initialTypes = {
  themeDark: ThemeDarkType;
  isLogged: InitialLoggedType;
};

type contextType = {
  state: initialTypes;
  dispatch: React.Dispatch<any>;
};

const initialState: initialTypes = {
  themeDark: initialThemeDark,
  isLogged: initialIsLogged,
};

export const Context = createContext<contextType>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (state: initialTypes, action: ReducerType) => ({
  themeDark: ThemeDark(state.themeDark, action),
  isLogged: isLogged(state.isLogged, action),
});

export const ContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <Context.Provider value={{
      state,
      dispatch,
    }}>
      {children} 
    </Context.Provider>
  )
};
