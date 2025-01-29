import { useEffect, useReducer } from "react";

export const useLocalStorageHook = (key, reducer, initialState) => {
  const initilizer = () => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  };
  const [state, dispatch] = useReducer(reducer, initialState, initilizer);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
};
