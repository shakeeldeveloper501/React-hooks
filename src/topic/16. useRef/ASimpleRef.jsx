import { useRef } from "react";

const ASimpleRef = () => {
  const divRef = useRef();
  const inputRef = useRef();

  const handleFocus = () => {
    console.log(divRef);
    console.log(divRef.current);
    console.log({...divRef.current});
    inputRef.current.focus();
    divRef.current.style.backgroundColor = "blue";
    divRef.current.style.borderRadius = "100%";
    divRef.current.click();
  };

  return (
    <div className="m-5">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter name"
        className="border"
      />
      <br />
      <div onClick={()=>{console.log("div pr click hoa h")}} ref={divRef} className="w-10 h-10 bg-red-800"></div>
      <button onClick={handleFocus}>Click here</button>
    </div>
  );
};

export default ASimpleRef;
