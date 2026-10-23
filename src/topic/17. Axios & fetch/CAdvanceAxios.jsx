import axios from "axios";
import { useState } from "react";

const CAdvanceAxios = () => {
 const [data, setData] = useState([])
//  const [postD, setPostD] = useState({})
 const [postD, setPostD] = useState([])

  const fetchData = async () => {
    const data = await axios('https://6adb41323b7e90b8208f9729.mockapi.io/user');
    setData(data.data)
    console.log(data.data);
  };
  
  const postData = async () => {
    const postDataAdd = await axios({
        url:'https://6adb41323b7e90b8208f9729.mockapi.io/user',
        method:'post',
        data:{
            name:"Ali Ahmad",
            age:220
        }
    });
    setPostD([...postD, postDataAdd.data])
    console.log(postDataAdd);
  };

    // console.log(axios.defaults);
  // console.log(axios.defaults.baseURL);
  // console.log(axios.defaults.headers);
  // console.log(axios.defaults);
  // console.log({...axios});

  return (
    <div>
      Axios
      <br />
      
      <button onClick={fetchData}>getData</button><br/>
      <button onClick={postData}>postData</button><br/>
      {/* <div>Show post data: {postD.name} {postD.age}</div> */}
      <div>{postD.map((user)=>(
        <div key={user.id}>
            {user.name},
            {user.age},
        </div>
      ))}</div>
      <div>{data.length}</div>
      <div>{data.map((user)=>(
        <div key={user.id}>
            {user.name},
            {user.age},
        </div>
      ))}</div>
    </div>
  );
};

export default CAdvanceAxios
