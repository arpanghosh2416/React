import React from 'react';

function OuterComponent() {
  return <span>This is outer component</span>
}

export default function MyApp() {
  function InnerComponent() {
    return <span>This is inner component</span>
  }

  return (
    <>
      <h1>Hello React MyApp</h1>
      {InnerComponent()} | {OuterComponent()}
      <br />
      <InnerComponent /> | <OuterComponent />
      <br />
      {`This is normal JavaScript ${10 + 10}`} | {90 * 2}
    </>
  );
}
