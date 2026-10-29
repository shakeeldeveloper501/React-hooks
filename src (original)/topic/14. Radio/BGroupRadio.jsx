import { useState } from "react";

const GroupRadio = () => {
  const [languages, setLanguages] = useState("other");
  const languagess = ["html", "css","js", "react"];
  return (
    <>
      {languagess.map((item) => {
        return (
          <label key={item} htmlFor={item}>
            <input
              id={item}
              type="radio"
              name="languages"
              value={item}
              checked={languages === item}
              onChange={(e) => setLanguages(e.target.value)}
            />
            {item}
          </label>
        );
      })}
    </>
  );
};

export default GroupRadio;
