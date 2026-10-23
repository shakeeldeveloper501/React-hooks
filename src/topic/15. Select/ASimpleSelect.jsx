import { useState } from "react";

const SimpleSelect = () => {
  const languages = ["html", "css", "js", "c++", "c", "java", "python"];
  
  const [language, setLanguage] = useState("");

  return (
    <div>
      <select
      className="border"
        value={language}
        onChange={(e) => {
          setLanguage(e.target.value);
        }}
      >
        <option value="">---Select below---</option>
        {languages.map((item) => {
          return (
            <option key={item} value={item}>
              {item.toUpperCase()}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SimpleSelect;
