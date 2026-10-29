import axios from "axios";

const ASimpleAxios = () => {

/* Fetch data with promise*/
  //     const fetchData = () => {
  //      fetch("https://jsonplaceholder.typicode.com/users")
  //      .then((response)=>response.json())
  //      .then((data)=>console.log(data))
  //   };
/* Fetch data with async await*/
  //   const fetchData = async()=>{
  //       const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //       const data = await response.json()
  //       console.log(response);
  //       console.log(data);
  //   }


    /* Fetch data through axios*/
    const fetchData = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    };

  return (
    <div>
      Axios
      <br />
      <button onClick={fetchData}>Click</button>
    </div>
  );
};

export default ASimpleAxios;
