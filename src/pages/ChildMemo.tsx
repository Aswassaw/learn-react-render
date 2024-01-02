import React, { Fragment } from "react";

interface ChildMemoProps {
  name?: string;
  person?: {
    fName: string;
    lName: string;
  };
  handleClick?: () => void;
}

export default function ChildMemo({ name }: ChildMemoProps) {
  console.log("ChildMemo Render");
  return (
    <Fragment>
      <p>ChildOne Render</p>
      <p>Name On Child: {name}</p>
    </Fragment>
  );
}

export const MemoizedChildTwo = React.memo(ChildMemo);
