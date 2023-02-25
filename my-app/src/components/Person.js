
const Person = (props) => {
    return (
      <>
        <h1> first name: {props.firstName}</h1>
        <h2>last name: {props.lastName} </h2>
        <h2>Age: {props.age} </h2>
      </>
    )
  }
  export default Person;