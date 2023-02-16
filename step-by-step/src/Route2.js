import { Link } from "react-router-dom";

export default function Route2() {
  return (
    <>
      <h1>This is About (Route - 2)</h1>
      <p>This is a very cool page of about</p>
      <p>We are talking about react router <Link to={"/home"}>Click here to go to Home</Link></p>
    </>
  );
}
