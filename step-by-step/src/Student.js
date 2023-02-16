function Student(props) {
  console.log(`The props for Student component is`, props);

  return (
    <>
      <h1>
        Hello Student {props.name}
      </h1>
      <p>{props.children}</p>
    </>
  );
}

export default Student;
