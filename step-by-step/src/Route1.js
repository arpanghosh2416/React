import { Link } from "react-router-dom";

export default function Route1() {
  return (
    <>
      <h1>This is Home (Route - 1)</h1>
      <p>This is a very cool page of home</p>
      <p>We are talking about react router <Link to={"/about"}>Click here to go to About</Link></p>
      <Link to={'/'}>Click here to root</Link>
    </>
  );
}
