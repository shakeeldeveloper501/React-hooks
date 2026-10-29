

/* Props data is read-only data we cannot change it  */
// function Component(props) {
//     props.name = "Ahmed"
//   return (
//       <>
//       <p>My name is {props.name}</p>
//       <p>Age is {props.age}</p>
//       <p>Status is {props.status}</p>
//       </>
//     )
// }




function Component({status, name, age}) {
  return (
      <>
      <p>My name is {name}</p>
      <p>Age is {age}</p>
      <p>Status is {status}</p>
      </>
    )
}

const FunctionVsComponent = () => {
    
    function anyFunc(name, age, status) {
    return (
      <>
      <p>My name is {name}</p>
      <p>My age is {age}</p>
      <p>Status is {status}</p>
      </>
    )
  }
  return (
    <div>
      {anyFunc("Ali", 22, "married")}
      <Component name="Ali" age={25} status="married" /> 
    </div>
  )
}

export default FunctionVsComponent
