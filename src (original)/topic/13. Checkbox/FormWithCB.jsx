import { useState } from "react";

const FormWithCB = () => {
  const [formData, setFormData] = useState({ email: "", tc: false });

  const changeHandler = (e) => {
    console.log(e.target.type, e.target.checked);
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFormData({
      email: "",
      tc: false,
    });
  };
  return (
    <div className="m-5 ">
      <form onSubmit={submitHandler}>
        <div className="space-x-2">
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="type email"
            className="border rounded"
          />
          <label htmlFor="checkbox">
            <input
              id="checkbox"
              name="tc"
              type="checkbox"
              checked={formData.tc}
              onChange={changeHandler}
            />
            Terms & conditions
          </label>
        </div>
        <button type="submit">Click here</button>
      </form>
    </div>
  );
};

export default FormWithCB;
