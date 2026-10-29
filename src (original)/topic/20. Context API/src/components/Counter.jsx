


import { useCount } from "../contexts/context/CountContext";

export default function Counter() {
  const { count, increment, decrement, reset } = useCount();

  return (
    <section>
      <h2>Counter Count: {count}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </section>
  );
}

