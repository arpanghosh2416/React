import React, { useContext } from "react";
import { CommonContext } from "./CommonContext";

export default function LeftSuperChild() {
  const { leftSuperChildColor } = useContext(CommonContext);

  console.log("LeftSuperChild.js rendered");
  return (
    <div>
      <h1 style={{ color: leftSuperChildColor }}>LeftSuperChild Component</h1>
    </div>
  );
}
