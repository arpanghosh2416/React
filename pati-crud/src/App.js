import { useEffect, useState } from "react";

const baseURL = "http://localhost:8888/api/employee";

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [updateId, setUpdateId] = useState('');
  const [updateName, setUpdateName] = useState('');
  const [updateEmail, setUpdateEmail] = useState('');
  const [updateSalary, setUpdateSalary] = useState('');
  const [employees, setEmployees] = useState([]);

  const createEmployee = () => {
    const data = {
      employeeName: name,
      employeeEmail: email,
      "salary": salary
    }

    fetch(`${baseURL}/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
      // console.log("createEmployee", data);
      employees.push(data);
      readAllEmployee();
    });
  }

  const readAllEmployee = () => {
    fetch(`${baseURL}/getAll`).then(response => response.json()).then(data => {
      // console.log("readAllEmployee", data);
      setEmployees(data);
    });
  }

  const updateEmployeeById = employeeId => {
    const data = {
      employeeName: updateName,
      employeeEmail: updateEmail,
      "salary": updateSalary
    }

    fetch(`${baseURL}/update/${employeeId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
      // console.log("updateEmployeeById", data);
      readAllEmployee();
    });
  }

  const deleteEmployeeById = employeeId => {
    fetch(`${baseURL}/delete/${employeeId}`, {
      method: "DELETE"
    }).then(response => response.text()).then(data => {
      // console.log("deleteEmployeeById", data);
      readAllEmployee();
    });
  }

  function clearForm() {
    setName('');
    setEmail('');
    setSalary('');
    setUpdateId('');
    setUpdateName('');
    setUpdateEmail('');
    setUpdateSalary('');
  }

  const registerEmployee = e => {
    e.preventDefault();
    createEmployee();
    clearForm();
  }

  const updateEmployee = (e, employeeId) => {
    e.preventDefault();
    updateEmployeeById(employeeId);
    clearForm();
  }

  const fillForm = index => {
    setUpdateId(employees[index].employeeId);
    setUpdateName(employees[index].employeeName);
    setUpdateEmail(employees[index].employeeEmail);
    setUpdateSalary(employees[index].salary);
  }

  useEffect(() => {
    readAllEmployee();
    console.log("useEffect of readAllEmployee");
  }, []);

  return (
    <>
      <div className="" style={{ display: "flex", justifyContent: "space-between", margin: "10px 10px" }}>
        <div className="">
          <table border={1}>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Employee Email</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                employees.map((employee, index) => {
                  let { employeeId, employeeName, employeeEmail, salary } = employee;
                  return (
                    <tr key={employeeId}>
                      <td>{employeeName}</td>
                      <td>{employeeEmail}</td>
                      <td>{salary}</td>
                      <td style={{ display: "flex", gap: "4px" }}>
                        <button onClick={() => fillForm(index)}>Update</button>
                        <button onClick={() => deleteEmployeeById(employeeId)}>Delete</button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
        <div className="">
          <form onSubmit={e => updateEmployee(e, updateId)} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <input type="text" placeholder="Name" value={updateName} onChange={e => setUpdateName(e.target.value)} /><br />
            <input type="email" placeholder="Email" value={updateEmail} onChange={e => setUpdateEmail(e.target.value)} /><br />
            <input type="number" placeholder="Salary" value={updateSalary} onChange={e => setUpdateSalary(e.target.value)} /><br />
            <button>Update Employee</button>
          </form>
        </div>
        <div className="">
          <form onSubmit={registerEmployee} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} /><br />
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
            <input type="number" placeholder="Salary" value={salary} onChange={e => setSalary(e.target.value)} /><br />
            <button>Add Employee</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
