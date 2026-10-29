
import { useState } from "react";
import { UserContext } from "../context/UserContext";

export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Ali",
    email: "ali@example.com",
  });

  function updateName(name) {
    setUser((prev) => ({ ...prev, name }));
  }

  function logout() {
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, updateName, logout }}>
      {children}
    </UserContext.Provider>
  );
}

