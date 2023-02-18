import React, { useContext } from "react";
import LeftSuperChild from "./LeftSuperChild";
import { CommonContext } from "./CommonContext";

export default function LeftChild() {
  const { leftChildColor } = useContext(CommonContext);

  console.log("LeftChild.js rendered");
  return (
    <div>
      <h1 style={{ color: leftChildColor }}>LeftChild Component</h1>
      <LeftSuperChild />
    </div>
  );
}
