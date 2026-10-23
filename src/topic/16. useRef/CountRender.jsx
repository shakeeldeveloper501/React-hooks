import { useEffect, useRef, useState } from "react";

const CountRender = () => {
  const [count, setCount] = useState(0);
  // const [randNum, setRandNum] = useState(0)
  const countRef = useRef(0);
  const randomFunc = () => {
    const numb = Math.floor(Math.random() * 100);
    setCount(numb);
  };

  useEffect(() => {
    console.log("render hoa");
    countRef.current += 1;
    // setRandNum(randNum + 1)
  });
  return (
    <div>
      count: {count}
      <br />
      {/* RendCount: {countRef.current} */}
      {/* RendCount: {randNum} */}
      <br />
      <button onClick={randomFunc}>Click</button>
    </div>
  );
};

export default CountRender;
