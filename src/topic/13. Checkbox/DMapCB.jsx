import { useState } from "react";

/* Checkbox with Object */
const DMapCB = () => {
  const [allLanguages, setAllLanguages] = useState({
    html: false,
    css: false
});
  const changeBox = (e) => {
    const { name, checked } = e.target;
    setAllLanguages({ ...allLanguages, [name]: checked });
  };

  return (
    <div className="flex flex-col mt-5 gap-5 ml-5">
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
}

/* Checkbox with array */
// const DMapCB = () => {
//   const langauges = ["HTML", "CSS", "Javascript"];
//   const [allLanguages, setAllLanguages] = useState([]);
//   console.log(allLanguages);
//   const changeBox = (e) => {
//     const { name } = e.target;
//     console.log(name);

//     setAllLanguages((prev) =>
//       prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
//     );
//   };
//   return (
//     <div className="flex flex-col mt-5 gap-5 ml-5">
//       {/* All Languages */}
//       {langauges.map((item, index) => {
//         return (
//           <label key={index} htmlFor={item}>
//             <input
//               id={item}
//               name={item}
//               type="checkbox"
//               checked={allLanguages[item]}
//               onChange={changeBox}
//             />
//             {item} box
//           </label>
//         );
//       })}
//     </div>
//   );
// };

export default DMapCB;
