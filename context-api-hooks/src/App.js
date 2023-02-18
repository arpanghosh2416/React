import { useState } from "react";
import { CommonContext } from "./CommonContext";
import LeftChild from "./LeftChild";
import RightChild from "./RightChild";
import HookUseEffectVSUseMemo from "./HookUseEffectVSUseMemo";
import HookUseRef from "./HookUseRef";

function App() {
  const [appName, setAppName] = useState("App");
  const [leftChildColor] = useState("red");
  const [rightChildColor] = useState("blue");
  const [leftSuperChildColor] = useState("green");
  const [rightSuperChildColor] = useState("gray");

  console.log("App.js rendered");
  return (
    <CommonContext.Provider value={{ setAppName, leftChildColor, rightChildColor, leftSuperChildColor, rightSuperChildColor }}>
      <h1 style={{ textAlign: "center" }}>{appName} Component</h1>
      <div className="" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <LeftChild /><RightChild />
      </div>
      <div className="" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <HookUseEffectVSUseMemo />
        <HookUseRef />
      </div>
    </CommonContext.Provider>
  );
}

export default App;
