import { forwardRef } from "react";

function HookUseForwardRef(props, ref) {
  console.log("In Child", props);

  return (
    <>
      <input type="text" ref={ref} />
    </>
  );
}

export default forwardRef(HookUseForwardRef);
