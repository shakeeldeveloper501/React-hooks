// import { useLoaderData } from "react-router-dom"

import { useNavigate } from "react-router-dom"

const About = () => {

  const navigate = useNavigate()

  const func = ()=>{
    navigate('/')
  }

  return (
    <>
      <div>About</div>
      <button onClick={func}>click</button>

      
      {/* {data.map((item, index) => {
        return (
          <p key={index}>{item.name}</p>
        )
      })} */}
    </>
  )
}

export default About