"use client";
import React, { useEffect, useState } from "react";

function useLocalStorage<T>(key: string, initialState: T) {
  const ISSERVER = typeof window === "undefined";

  const [value, setValue] = useState<T>(() => {
    const storedData = !ISSERVER ? localStorage.getItem(key) : null;

    const data = storedData ? JSON.parse(storedData) : initialState;

    return data;
  });

  useEffect(() => {
    if (!ISSERVER) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}

export default useLocalStorage;
