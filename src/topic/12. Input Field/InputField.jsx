import { useState } from "react";

// const InputField = () => {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         value={name}
//         onChange={(event) => setName(event.target.value)}
//         placeholder="Enter your name"
//       />
//     </div>
//   );
// };





const InputField = () => {
  const [formData, setFormData] = useState({
  name: "",
  email: ""
});

function handleChange(e) {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
}
  return (
    <form>
    <input
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Name"
    />
    <input
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Email"
    />
    <h3>{formData.name} -- {formData.email}</h3>
  </form>
  );
};

export default InputField;
