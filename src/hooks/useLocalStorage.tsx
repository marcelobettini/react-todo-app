import { useState, useEffect } from "react";
import { iTask } from "../tasks/iTask";

export const useLocalStorage = (
  key: string,
  initialValue: iTask[] = []
): [iTask[], React.Dispatch<React.SetStateAction<iTask[]>>] => {
  const [storedArray, setStoredArray] = useState<iTask[]>(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedArray));
  }, [key, storedArray]);

  return [storedArray, setStoredArray];
};
