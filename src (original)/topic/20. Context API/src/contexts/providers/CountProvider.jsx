import { useState } from "react";
import { CountContext } from "../context/CountContext";

export default function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }
  function decrement() {
    setCount((prev) => prev - 1);
  }
  function reset() {
    setCount(0);
  }
  const value = {
    count,
    increment,
    decrement,
    reset,
  };

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
}

