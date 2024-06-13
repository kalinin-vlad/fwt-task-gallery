import { useEffect, useState } from "react";

export function useLocalStorageState<T>(
  initialState: T,
  key: string,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? (JSON.parse(storedValue) as T) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key, value],
  );

  return [value, setValue];
}
