import { useState } from "react";
import data from "./data";

const AdvanceSelect = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  console.log(selectedCountry, selectedCity);

  return (
    <>
      <select
      className="border"
        value={selectedCountry}
        onChange={(e) => {
          setSelectedCountry(e.target.value);
          setSelectedCity("");
        }}
      >
        <option value="">---Select country---</option>
        {Object.keys(data).map((item) => {
          return (
            <option key={item} value={item}>
              {item.toUpperCase()}
            </option>
          );
        })}
      </select>

      {selectedCountry && (
        <select className="border"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">---Select city---</option>
          {data[selectedCountry].map((item) => {
            return (
              <option key={item} value={item}>
                {item.toUpperCase()}
              </option>
            );
          })}
        </select>
      )}

      <p>
        Country: {selectedCountry}, city: {selectedCity}
      </p>
    </>
  );
};

export default AdvanceSelect;
