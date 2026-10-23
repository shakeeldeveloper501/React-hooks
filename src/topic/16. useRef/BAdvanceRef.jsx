import { useEffect, useRef, useState } from "react";

/* Normal variable re-render pr apni value persist nei rkhta */
// const BAdvanceRef = () => {
//   const [count, setCount] = useState(0);

//   let countVar = 0;

//   const handleIncrement = () => {
//     setCount(count + 1);
//     countVar += 1;
//     console.log(countVar);
//   };

//   useEffect(() => {
//     console.log("re render hua hai");
//   });

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//     </>
//   );
// };

/* useRef sy variable re-render pr apni value persist rkhta hy */
const BAdvanceRef = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0)

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current+=1
    console.log(countRef);
  };
  useEffect(() => {
    console.log("re render hua hai");
  });
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
};

export default BAdvanceRef;
