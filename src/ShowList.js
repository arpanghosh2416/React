import React from 'react';

function ShowList() {
  // const students = ["Anil", "Sidhu", "Peter", "Sam"];

  const users = [
    { name: "Sayan Das", age: 21, phone: 6291462153 },
    { name: "Sayan Dhar", age: 22, phone: 6291462152 },
    { name: "Sayan Roy", age: 20, phone: 6291462158 }
  ];

  // students.map(student => {
  //   console.warn(student);
  // })

  // return (
  //   <div>
  //     {
  //       students.map(student => {
  //         return (<h1>{student}</h1>);
  //       })
  //     }
  //   </div>
  // );

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.phone}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
}

export default ShowList;
