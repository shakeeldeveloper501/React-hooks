// import { useState } from "react";

// /*========Stage:1=========*/

// const Counter = () => {
//   let [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1);
//   }

//   function decrement() {
//     setCount(count - 1);
//   }

//   function reset() {
//     setCount(0);
//   }
//   return (
//     <>
//       <h1>Counter App</h1>
//       <p>Count : {count}</p>

//       <div className="buttons">
//         {/* <button onClick={increment}>➕ INCREMENT</button>
//         <button onClick={decrement}>➖ DECREMENT</button>
//         <button onClick={reset}>🔄️ RESET</button> */}
//         {/* <Button text="ICREMENT" func={increment} />
//         <Button text="DECREMENT" func={decrement} />
//         <Button text="RESET" func={reset} /> */}
//       </div>
//     </>
//   );
// };

// // function Button(obj){
// //     console.log(obj);

// //     return(
// //         <button onClick={obj.func}>{obj.text}</button>
// //     )
// // }

// /*========Stage:2=========*/
// // function Button({ text, func }) {
// //   return <button onClick={func}>{text}</button>;
// // }

// export default Counter;
