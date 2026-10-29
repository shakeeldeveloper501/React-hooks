import { useState } from "react";

/* Beginner level */
const CMultipleCB = () => {
  const [isHTML, setIsHTML] = useState(false);
  const [isCSS, setIsCSS] = useState(false);

  console.log(isHTML, isCSS);
  return (
    <div className="flex flex-col mt-5 gap-5">
      <label htmlFor="html">
        <input
          id="html"
          type="checkbox"
          checked={isHTML}
          onChange={(e) => setIsHTML(e.target.checked)}
        />
        HTML box
      </label>
      <label htmlFor="css">
        <input
          id="css"
          type="checkbox"
          checked={isCSS}
          onChange={(e) => setIsCSS(e.target.checked)}
        />
        CSS box
      </label>
    </div>
  );
};

/* Advance level */
// const CMultipleCB = () => {
//    const [allLanguages, setAllLanguages] = useState({
//     html: false,
//     css: false
//   });
//   const changeBox = (e) => {
//     const { name, checked } = e.target;
//     setAllLanguages({ ...allLanguages, [name]: checked });
//   };

//   return (
//     <div className="flex flex-col mt-5 gap-5">
//       <label htmlFor="html">
//         <input
//           id="html"
//           name="html"
//           type="checkbox"
//           checked={allLanguages.html}
//           onChange={changeBox}
//         />
//         HTML box
//       </label>
//       <label htmlFor="css">
//         <input
//           id="css"
//           name="css"
//           type="checkbox"
//           checked={allLanguages.css}
//           onChange={changeBox}
//         />
//         CSS box
//       </label>
//     </div>
//   );
// };

export default CMultipleCB;
