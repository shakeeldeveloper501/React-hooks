const Button = ({ color, children, setPopup }) => {
    
    
  return (
    <button  className={`${color} text-white px-4 py-2 rounded-full`}
    onClick={()=>setPopup(true)}
    >
      {children}
    </button>
  );
};

export default Button;
