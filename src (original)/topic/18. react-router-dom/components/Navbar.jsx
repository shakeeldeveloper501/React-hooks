import {  NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <>
      <ul className=' flex gap-10 bg-gray-300 '>
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-red-500' : ''}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-red-500' : ''}>About</NavLink>
        {/* <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-red-500' : ''}>Contact</NavLink> */}
        
        {/* <Link to="/help">Help</Link> */}
        
        {/* <NavLink className={(parameter)=>console.log(parameter)}></NavLink>
        <NavLink className={(parameter)=>console.log(parameter.isActive)}></NavLink>
        <NavLink className={({isActive})=>console.log(isActive)}></NavLink>
         */}
        {/* <NavLink to={"/navlink"} className={({isActive})=>isActive?"bg-red-900":""}>NavLink</NavLink> */}

      </ul>
    </>
  )
}

export default Navbar