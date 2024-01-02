import { Fragment, useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(1);

  console.log("useState Render");

  return (
    <Fragment>
      <h1>UseState</h1>

      <div>
        <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
        <button onClick={() => setCount(0)}>Count to 0</button>
        <button onClick={() => setCount(5)}>Count to 5</button>
      </div>
    </Fragment>
  );
}
