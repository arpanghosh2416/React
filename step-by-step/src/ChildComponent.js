import React from 'react';

function ChildComponent(props) {
  props.alert("For Parent");

  return (
    <>
      <tr style={{ color: "blueviolet" }}>
        <td>Supratim</td>
        <td>20+</td>
        <td>3965871230</td>
      </tr>
    </>
  );
}

export default ChildComponent;
