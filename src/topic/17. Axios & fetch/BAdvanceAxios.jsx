import axios from "axios";

const BAdvanceAxios = () => {
  
// console.log({...axios});
// console.log(axios.defaults);
// console.log(axios.defaults.headers);
    
    
    const api = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com",
        headers: {
            Accept: "Application/json",
            "Content-Type": "Application/json",
            Authorization:"Bearer token2sdfkj234"
        },
    });
    const fetchData = async () => {
        const data = await api("/users");
        console.log(data);
    };

  return (
    <div>
      Axios
      <br />
      <button onClick={fetchData}>Click</button>
    </div>
  );
};

export default BAdvanceAxios;
