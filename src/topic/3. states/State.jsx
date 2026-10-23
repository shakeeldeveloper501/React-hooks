// import { useState } from "react";

/*========Stage:1=========*/
/* Why use React for updating State (UI) 
Is way sy value to update hoti hy pr state change nei hoti
Agr state ko change krny ky leya hamein DOM document ky zerya element ko select kr ky phr us ky innerText
mein change krna prta hy tb UI change hoti hy
*/
// const State = () => {
//     let count = 0

//     function countFunc(){
//         console.log(count);
//         return count++
//     }
//   return (
//     <div>
//       <button onClick={countFunc}>click</button>
//       <p>Number: {count}</p>
//     </div>
//   )
// }

/*========Stage:2=========*/
// ui change krny ky leya
// const State = () => {
//     const [count, setCount] = useState(0)

//     function countFunc(){
//         setCount(count + 1)
//     }
//   return (
//     <div>
//       <button onClick={countFunc}>click</button>
//       <p>{count}</p>

//     </div>
//   )
// }

/*========Stage:3=========*/
/* ui change krny ky leya */
// const State = () => {

//     const arr = useState()
//     console.log(arr);
//     const value = useState("anyValue")
//     console.log(value);
//     // Array Destructuring
//     const [variableName, setterFunction] = useState(7)
//     console.log(variableName, setterFunction);

//     const [count, setCount] = useState(10)

//     function countFunc(){
//         setCount(count + 1)
//     }
//   return (
//     <div>
//       <button onClick={countFunc}>click</button>
//       <p>{count}</p>

//     </div>
//   )
// }

/*========Stage:4=========*/
/* */

// const State = () => {
//   const [count, setCount] = useState(10)
//   function countFunc() {
//     setCount(count + 1)

//     // setCount((prevCount) => {
//     //   const newValue = prevCount + 1;
//     //   console.log(newValue) // return new value
//     //   return newValue;
//     // });

//     // setCount((prev)=>prev+1)
    // setCount(prev=>prev+1)
//   }
//   return (
//     <div>
//       <button onClick={countFunc}>clic k</button>
//       <p>{count}</p>
//     </div>
//   );
// };

/*========Stage:5=========*/
/* Variable mein object store krna or usy update krna*/
// const State = () => {
//   const [obj, setObj] = useState({
//     name: "Ali",
//   });
//   function countFunc() {
//     setObj((prev) => ({
//       ...prev,
//       age: 123,
//     }));
//   }
//   return (
//     <div>
//       <button onClick={countFunc}>clic k</button>
//       <p>{obj.name}</p>
//       {obj.age && <p>{obj.age}</p>}
//     </div>
//   );
// };

/*========Stage:7=========*/
/* Batching of update*/

// const State = () => {
//   const [count, setCount] = useState(0);
//   function countFunc() {
//     /* Batch-I */
//     setCount(count + 1); // Call 1 (1)
//     setCount(count + 1); // Call 2 (1)
//     setCount(count + 1); // Call 3 (1)
//     setCount(count + 1); // Call 4 (1)

//     /* Batch-II */
//     //  Agr setCount mein callback function pass krein to ya current state ko update krta hy
//     // setCount((prev) => prev+1)  // Call 1 (1)
//     // setCount(prev => prev+1)   // Call 2 (2)
//     // setCount(prev => prev+1)  // Call 3 (3)
//     // setCount(prev => prev+1)  // Call 4 (4)

//     /* Batch-III */
//     //  setCount(count++) // ya is leya nei chelta hy hum ny const variable dia hota hy
//     //  setCount(count++) // agr let dein to ya chel jata hy
//     //  setCount(++count) // pahly update kry ga phr current value change kr dy ga update krny ky leya esy post-increment krein
//   }
//   return (
//     <div>
//       <button onClick={countFunc}>click</button>
//       <p>{count}</p>
//     </div>
//   );
// };

// export default State;
