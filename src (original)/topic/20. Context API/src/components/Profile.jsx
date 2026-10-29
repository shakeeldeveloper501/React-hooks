
import { useState } from "react";
import { useUser } from "../contexts/context/UserContext";
import { useCount } from "../contexts/context/CountContext";

export default function Profile() {
  const { user, updateName, logout } = useUser();
   const { count} = useCount();
  const [inputVal, setInputVal] = useState("");

  if (!user) {
    return <h2>User logged out</h2>;
  }
  return (
    <section>
      <p>Count: {count}</p>
      <h2>Name: {user.name}</h2>
      <p>Email: {user.email}</p>
      <input
        placeholder="Enter name"
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />
      <button
        onClick={() => {
          (updateName(inputVal), setInputVal(""));
        }}
      >
        Change Name
      </button>

      <button onClick={logout}>Logout</button>
    </section>
  );
}
