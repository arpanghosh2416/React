// window.alert("This is an alert");

// import NavbarLink from './NavbarLink';
// import DynamicRoute from './DynamicRoute';
// import Redirection from "./Redirection";
// import AdvanceRouting from "./AdvanceRouting";
// import Routing from "./Routing";
// import HOCExample from "./HOCExample";
// import HookUseRef from "./HookUseRef";
// import HookUseMemo from "./HookUseMemo";
// import ParentComponent from "./ParentComponent";
import GeneralForm from "./GeneralForm";
// import HookUseEffect from "./HookUseEffect";
// import ShowList from "./ShowList";

// function App() {
//   const [number, setNumber] = useState(1);
//   const [data, setData] = useState("Anil Sidhu");

//   console.log("-------------------------------");

//   return (
//     <>
//       <h1>({number}) Hello React App - {data}</h1>
//       <button onClick={() => setData("Sayan Das")}>Click Me</button>
//       <button onClick={() => setNumber(number + 1)}>Increase</button>
//     </>
//   );
// }

// export default App;

// import MyForm from './MyForm';
// import Student from './Student';

export default function App() {
  return (
    // <>
    //   <h1>Welcome to React App</h1>
    //   <Student name={"Supratim"}>Supratim is very good student</Student>
    //   <Student name={"Utsav"}>Utsav is very intelligent student</Student>
    // </>
    <>
      {/* <MyForm /> */}
      <GeneralForm />
      {/* <HookUseEffect /> */}
      {/* <ShowList /> */}
      {/* <ParentComponent /> */}
      {/* <HookUseMemo /> */}
      {/* <HookUseRef /> */}

      {/* <input type="text" value={10} />
      <br />
      <input id="notPreferable" type="text" defaultValue={100} /> */}

      {/* <HOCExample /> */}
      {/* <Routing /> */}
      {/* <AdvanceRouting /> */}
      {/* <Redirection /> */}
      {/* <DynamicRoute /> */}
      {/* <NavbarLink /> */}
    </>
  );
}
