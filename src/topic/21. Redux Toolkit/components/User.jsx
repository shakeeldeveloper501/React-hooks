import { useSelector, useDispatch } from "react-redux";
import { setUser, logout } from "../redux/features/userSlice";

function User() {
  const { user, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  return (
    <div className="bg-gray-400">
      <h2>User Profile</h2>

      {isAuthenticated ? (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>

          <button onClick={() => dispatch(logout())}>
            Logout
          </button>
        </>
      ) : (
        <>
          <p>Please log in.</p>

          <button
            onClick={() =>
              dispatch(
                setUser({
                  id: 1,
                  name: "Ali",
                  email: "ali@example.com",
                })
              )
            }
          >
            Demo Login
          </button>
        </>
      )}
    </div>
  );
}

export default User;