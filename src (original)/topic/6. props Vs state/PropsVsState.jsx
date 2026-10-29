import { useState } from "react";

/* Hr component ka apna data create hota hy */
function Component(props) {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  return (
    <div className="border m-4 w-fit p-3">
      <p>My name is {props.name}</p>
      <p>{count}</p>
      <button onClick={increment}>Click here</button>
    </div>
  );
}

const PropsVsState = () => {
  return (
    <div>
      <Component name="Ali" />
      <Component name="Ahmed" />
      <Component name="Hamza" />
    </div>
  );
};

export default PropsVsState;
