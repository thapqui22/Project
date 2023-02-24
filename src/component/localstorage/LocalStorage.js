import { useState, useEffect } from "react";

export const useStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      return JSON.parse(storedValue);
    }
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};
