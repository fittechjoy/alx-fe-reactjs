import { useState } from "react";

function Counter() {
  // state hook
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current Count: {count}</p>

      {/* Increment button */}
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {/* Decrement button */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      {/* Reset button */}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;