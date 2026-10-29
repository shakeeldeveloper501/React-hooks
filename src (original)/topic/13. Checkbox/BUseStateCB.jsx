import { useState } from "react";

const UseStateCB = () => {
     const [isChecked, setIsChecked] = useState(false);
      console.log(isChecked);
  return (
    <>
      <label htmlFor="anyId">
        <input
          id="anyId"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          // onChange={() => setIsChecked((prev) => !prev)}
        />
        Check box
      </label>
    </>
  )
}

export default UseStateCB
