import { useState } from "react";

const SimpleRadio = () => {
 
  const [gender, setGender] = useState('other');

  return (
    <>

      <label htmlFor="male">
        <input
          id='male'
          type="radio"
          name='gender'
          value={'male'}
          checked={gender === 'male'}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>
    </>
  )
}

export default SimpleRadio;
