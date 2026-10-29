const Props = () => {
  // const obj = {
  //   name:"Ali",
  //   age:25
  // }

  // function increment(a, b) {
  //   console.log(a+b);
  // }

  return (
    <div>

       {/* <Component /> */}

      {/* <Component name={"Ali"} age={25} />  */}

      {/* <Component name="Ali" age={22} />
      <Component name="Ahmed" age={14} />
      <Component name="Shakeel" age={30} /> */}

      {/* <Component data={obj} status="married" />  */}

      {/* <Component {...obj} status="married"/> */}

      {/* <Component arr={["Ali", "Ahmed", "Hamza"]} age={20} /> */}
      
      {/* <Component element={<p>This is element</p>} /> */}

      {/* <Component title="This is props">
        <h1>This is heading</h1>
        <p>This is paragraph</p>
      </Component> */}

      {/* <Component /> */}



    </div>
  );
};
export default Props;

/* Stage 1 */

// function Component(props) {
//   console.log(props); // Ya aik empty object hota hy
//   return <div>This is a simple component</div>;
// }

/* Stage 2 */

// function Component(obj){
//   console.log(obj);
//   return(
//     <div>
//       <p>User name is: {obj.name}</p>
//       <p>User age is: {obj.age}</p>
//     </div>
//   )
// }

/* Stage 3 
Props object hota hy jesy descurtion kr skty hein
(props:properties ko object mein add krna) */
// function Component({name, age}){
//   return(
//     <div>
//       <p>User name is: {name}</p>
//       <p>User age is: {age}</p>
//     </div>
//   )
// }

/* Stage 4 
Object ko as props send krna
*/

// function Component({data, status}){
//   const {name, age} = data;
//   console.log(name, age);

//   return(
//     <div>
//       <p>User name is: {name}</p>
//       <p>User age is: {age}</p>
//       <p>User age is: {status}</p>
//     </div>
//   )
// }

/* Stage 5 
nested object ki destructuring
*/
// function Component({data, status}){
//    const {name, age} = data;
//   console.log(props);
//   return(
//     <div>
//       <p>User name is: {name}</p>
//       <p>User age is: {age}</p>
//       <p>User age is: {status}</p>
//     </div>
//   )
// }

/* Stage 6 
nested object ko destructring component mein he kr ky receive krna
*/
// function Component({name, age, status}) {
//   console.log(name, age, status);
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//       <h1>{status}</h1>
//     </div>
//   );
// }

/* Stage 7
Array ko as props send krna or received krna
*/
// function Component({arr}){
//   return(
//     <ul>
//    {arr.map((item, i)=>(
//    <li key={i}>{item}</li>
// ))}
//     </ul>
//   )
// }

/* Stage 8
Array ko as props send krna or received krna
*/

// function Component({ arr, age }) {
//   console.log(arr, age);

//   return (
//     <ul>
//       <p>Age is {age}</p>
//       {arr.map((item, i) => (
//         <li key={i}>{item}</li>
//       ))}
//     </ul>
//   );
// }

/* Stage 9
Function ko pass krna
*/

// function Component({ myFunc }) {
//   return (
//     <div>
//       <button onClick={myFunc}>click</button>
//     </div>
//   );
// }

/* Stage 10
Function mein parameters ko pass krna
*/

// function Component({ myFunc }) {
//   return (
//     <div>
//       <button onClick={()=>myFunc(2, 4)}>click</button>
//     </div>
//   );
// }

/* Stage 11
Element ko pass krna
*/
// function Component({ element }) {
//   return (
//     <div>
//       <h1>{element}</h1>
//     </div>
//   );
// }

/* Stage 12
Children ko pass krna
*/

// function Component(props) {
//   console.log(props);
  
//   return (
//     <div> 
//         {props.children}
//     </div>
//   );
// }

/* Stage 13
Children ko destruction ky ky access krna
*/

// function Component({title, children}) {
//   console.log(title, children);
//   return (
//     <div>
//       <h1>{title}</h1>
//       <div>
//         {children}
//       </div>
//     </div>
//   );
// }

/* Stage 14
Default props pass krna
*/
// function Component({title = "Props title", status='unknown'}) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h1>{status}</h1>
//     </div>
//   );
// }







