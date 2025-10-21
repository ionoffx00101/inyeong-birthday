import { useEffect, useState } from "react";

export const useSessionStorage = <T,>(key: string, initialValue: T) => {
  const state = useState<T>(() => {
    const stored = sessionStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T) : initialValue;
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state[0]));
  }, [key, state]);

  return state;
};
