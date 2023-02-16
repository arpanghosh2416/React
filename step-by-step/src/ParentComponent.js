import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  let parentAlert = (childMessage) => {
    alert(`From Parent ${childMessage}`);
  }

  return (
    <div>
      <table border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ color: "red" }}>
            <td>Sayan</td>
            <td>21</td>
            <td>9163681672</td>
          </tr>
          <ChildComponent alert={parentAlert} />
        </tbody>
      </table>
    </div>
  );
}

export default ParentComponent;
