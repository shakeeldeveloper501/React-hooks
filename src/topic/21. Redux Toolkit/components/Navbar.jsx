import { useSelector } from "react-redux"

const Navbar = () => {
  const user = useSelector((state)=>state.user)
  console.log(user.user);
  
  return (
    <div className="bg-gray-300">
      Navbar Name: 
      
      
    </div>
  )
}

export default Navbar
