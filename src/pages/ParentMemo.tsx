import { Fragment, useState, useMemo, useCallback } from "react";
import ChildMemo, { MemoizedChildTwo } from "./ChildMemo";

export default function ParentMemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Andry Pebrianto");

  const person = {
    fName: "Andry",
    lName: "Pebrianto",
  };
  const memoizedPerson = useMemo(() => person, []);

  const handleClick = () => {
    console.log("CLICK");
  };
  const memoizedHandleClick = useCallback(handleClick, []);

  console.log("ParentMemo Render");
  return (
    <Fragment>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Nibiru Developer")}>Change Name</button>
      {/* <ChildMemo name={name} /> */}
      <p>Name On Parent: {name}</p>
      {/* <MemoizedChildTwo name={name} person={memoizedPerson} /> */}
      <ChildMemo name={name} handleClick={memoizedHandleClick} />
    </Fragment>
  );
}
