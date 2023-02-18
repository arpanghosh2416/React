import React, { useContext, useState } from "react";
import { CommonContext } from "./CommonContext";

export default function RightSuperChild() {
  const [isChanged, setIsChanged] = useState(false);
  const { setAppName, rightSuperChildColor } = useContext(CommonContext);

  console.log("RightSuperChild.js rendered");
  return (
    <div>
      <h1 style={{ color: rightSuperChildColor }}>RightSuperChild Component</h1>
      <button onClick={() => {
        if (isChanged) {
          setAppName("App");
          setIsChanged(false);
        } else {
          setAppName("Context-API");
          setIsChanged(true);
        }
      }}>Toggle App Name</button>
    </div>
  );
}
