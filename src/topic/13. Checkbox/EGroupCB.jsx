import { useState } from "react";

const EGroupCB = () => {
  const [allLanguages, setAllLanguages] = useState({
    html: false,
    css: false,
  });
  const changeBox = (e) => {
    const { name, checked } = e.target;
    setAllLanguages({ ...allLanguages, [name]: checked });
  };

  const selectAll = (e) => {
    setAllLanguages({
      html: e.target.checked,
      css: e.target.checked,
    });
  };
  const isAllLanguagesChecked = Object.values(allLanguages).every(
    (item) => item === true,
  );

  //  const isAllLanguagesChecked = Object.values(allLanguages).every(Boolean) // Ya truthy pr work kr rha hota hy

  return (
    <div className="flex flex-col mt-5 gap-5 ml-5">
      {/* Select All */}
      <label htmlFor="selectAll">
        <input
          id="selectAll"
          name="select"
          type="checkbox"
          checked={isAllLanguagesChecked}
          onChange={selectAll}
        />
        Select All
      </label>
      {/* All Languages */}
      {Object.keys(allLanguages).map((item, index) => {
        return (
          <label key={index} htmlFor={item}>
            <input
              id={item}
              name={item}
              type="checkbox"
              checked={allLanguages[item]}
              onChange={changeBox}
            />
            {item} box
          </label>
        );
      })}
    </div>
  );
};

export default EGroupCB;
